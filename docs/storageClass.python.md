# `storageClass` Submodule <a name="`storageClass` Submodule" id="@cdktf/provider-kubernetes.storageClass"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageClass <a name="StorageClass" id="@cdktf/provider-kubernetes.storageClass.StorageClass"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/storage_class kubernetes_storage_class}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.storageClass.StorageClass.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import storage_class

storageClass.StorageClass(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: StorageClassMetadata,
  storage_provisioner: str,
  allowed_topologies: StorageClassAllowedTopologies = None,
  allow_volume_expansion: typing.Union[bool, IResolvable] = None,
  id: str = None,
  mount_options: typing.List[str] = None,
  parameters: typing.Mapping[str] = None,
  reclaim_policy: str = None,
  volume_binding_mode: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadata">StorageClassMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.Initializer.parameter.storageProvisioner">storage_provisioner</a></code> | <code>str</code> | Indicates the type of the provisioner. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.Initializer.parameter.allowedTopologies">allowed_topologies</a></code> | <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologies">StorageClassAllowedTopologies</a></code> | allowed_topologies block. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.Initializer.parameter.allowVolumeExpansion">allow_volume_expansion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the storage class allow volume expand. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/storage_class#id StorageClass#id}. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.Initializer.parameter.mountOptions">mount_options</a></code> | <code>typing.List[str]</code> | Persistent Volumes that are dynamically created by a storage class will have the mount options specified. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | The parameters for the provisioner that should create volumes of this storage class. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.Initializer.parameter.reclaimPolicy">reclaim_policy</a></code> | <code>str</code> | Indicates the type of the reclaim policy. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.Initializer.parameter.volumeBindingMode">volume_binding_mode</a></code> | <code>str</code> | Indicates when volume binding and dynamic provisioning should occur. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.storageClass.StorageClass.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.storageClass.StorageClass.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.storageClass.StorageClass.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.storageClass.StorageClass.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.storageClass.StorageClass.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.storageClass.StorageClass.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.storageClass.StorageClass.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.storageClass.StorageClass.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.storageClass.StorageClass.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.storageClass.StorageClass.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadata">StorageClassMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/storage_class#metadata StorageClass#metadata}

---

##### `storage_provisioner`<sup>Required</sup> <a name="storage_provisioner" id="@cdktf/provider-kubernetes.storageClass.StorageClass.Initializer.parameter.storageProvisioner"></a>

- *Type:* str

Indicates the type of the provisioner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/storage_class#storage_provisioner StorageClass#storage_provisioner}

---

##### `allowed_topologies`<sup>Optional</sup> <a name="allowed_topologies" id="@cdktf/provider-kubernetes.storageClass.StorageClass.Initializer.parameter.allowedTopologies"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologies">StorageClassAllowedTopologies</a>

allowed_topologies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/storage_class#allowed_topologies StorageClass#allowed_topologies}

---

##### `allow_volume_expansion`<sup>Optional</sup> <a name="allow_volume_expansion" id="@cdktf/provider-kubernetes.storageClass.StorageClass.Initializer.parameter.allowVolumeExpansion"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the storage class allow volume expand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/storage_class#allow_volume_expansion StorageClass#allow_volume_expansion}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.storageClass.StorageClass.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/storage_class#id StorageClass#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mount_options`<sup>Optional</sup> <a name="mount_options" id="@cdktf/provider-kubernetes.storageClass.StorageClass.Initializer.parameter.mountOptions"></a>

- *Type:* typing.List[str]

Persistent Volumes that are dynamically created by a storage class will have the mount options specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/storage_class#mount_options StorageClass#mount_options}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-kubernetes.storageClass.StorageClass.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

The parameters for the provisioner that should create volumes of this storage class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/storage_class#parameters StorageClass#parameters}

---

##### `reclaim_policy`<sup>Optional</sup> <a name="reclaim_policy" id="@cdktf/provider-kubernetes.storageClass.StorageClass.Initializer.parameter.reclaimPolicy"></a>

- *Type:* str

Indicates the type of the reclaim policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/storage_class#reclaim_policy StorageClass#reclaim_policy}

---

##### `volume_binding_mode`<sup>Optional</sup> <a name="volume_binding_mode" id="@cdktf/provider-kubernetes.storageClass.StorageClass.Initializer.parameter.volumeBindingMode"></a>

- *Type:* str

Indicates when volume binding and dynamic provisioning should occur.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/storage_class#volume_binding_mode StorageClass#volume_binding_mode}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.putAllowedTopologies">put_allowed_topologies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.resetAllowedTopologies">reset_allowed_topologies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.resetAllowVolumeExpansion">reset_allow_volume_expansion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.resetMountOptions">reset_mount_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.resetReclaimPolicy">reset_reclaim_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.resetVolumeBindingMode">reset_volume_binding_mode</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.storageClass.StorageClass.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-kubernetes.storageClass.StorageClass.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.storageClass.StorageClass.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.storageClass.StorageClass.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-kubernetes.storageClass.StorageClass.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-kubernetes.storageClass.StorageClass.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-kubernetes.storageClass.StorageClass.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-kubernetes.storageClass.StorageClass.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-kubernetes.storageClass.StorageClass.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-kubernetes.storageClass.StorageClass.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-kubernetes.storageClass.StorageClass.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClass.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClass.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClass.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClass.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClass.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClass.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClass.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClass.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClass.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClass.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClass.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClass.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClass.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClass.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClass.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClass.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClass.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClass.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-kubernetes.storageClass.StorageClass.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-kubernetes.storageClass.StorageClass.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.storageClass.StorageClass.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.storageClass.StorageClass.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClass.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClass.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-kubernetes.storageClass.StorageClass.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.storageClass.StorageClass.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-kubernetes.storageClass.StorageClass.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-kubernetes.storageClass.StorageClass.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.storageClass.StorageClass.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-kubernetes.storageClass.StorageClass.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.storageClass.StorageClass.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_allowed_topologies` <a name="put_allowed_topologies" id="@cdktf/provider-kubernetes.storageClass.StorageClass.putAllowedTopologies"></a>

```python
def put_allowed_topologies(
  match_label_expressions: typing.Union[IResolvable, typing.List[StorageClassAllowedTopologiesMatchLabelExpressions]] = None
) -> None
```

###### `match_label_expressions`<sup>Optional</sup> <a name="match_label_expressions" id="@cdktf/provider-kubernetes.storageClass.StorageClass.putAllowedTopologies.parameter.matchLabelExpressions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressions">StorageClassAllowedTopologiesMatchLabelExpressions</a>]]

match_label_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/storage_class#match_label_expressions StorageClass#match_label_expressions}

---

##### `put_metadata` <a name="put_metadata" id="@cdktf/provider-kubernetes.storageClass.StorageClass.putMetadata"></a>

```python
def put_metadata(
  annotations: typing.Mapping[str] = None,
  generate_name: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None
) -> None
```

###### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.storageClass.StorageClass.putMetadata.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the storage class that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/storage_class#annotations StorageClass#annotations}

---

###### `generate_name`<sup>Optional</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.storageClass.StorageClass.putMetadata.parameter.generateName"></a>

- *Type:* str

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/storage_class#generate_name StorageClass#generate_name}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.storageClass.StorageClass.putMetadata.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the storage class.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/storage_class#labels StorageClass#labels}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.storageClass.StorageClass.putMetadata.parameter.name"></a>

- *Type:* str

Name of the storage class, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/storage_class#name StorageClass#name}

---

##### `reset_allowed_topologies` <a name="reset_allowed_topologies" id="@cdktf/provider-kubernetes.storageClass.StorageClass.resetAllowedTopologies"></a>

```python
def reset_allowed_topologies() -> None
```

##### `reset_allow_volume_expansion` <a name="reset_allow_volume_expansion" id="@cdktf/provider-kubernetes.storageClass.StorageClass.resetAllowVolumeExpansion"></a>

```python
def reset_allow_volume_expansion() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-kubernetes.storageClass.StorageClass.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_mount_options` <a name="reset_mount_options" id="@cdktf/provider-kubernetes.storageClass.StorageClass.resetMountOptions"></a>

```python
def reset_mount_options() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-kubernetes.storageClass.StorageClass.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_reclaim_policy` <a name="reset_reclaim_policy" id="@cdktf/provider-kubernetes.storageClass.StorageClass.resetReclaimPolicy"></a>

```python
def reset_reclaim_policy() -> None
```

##### `reset_volume_binding_mode` <a name="reset_volume_binding_mode" id="@cdktf/provider-kubernetes.storageClass.StorageClass.resetVolumeBindingMode"></a>

```python
def reset_volume_binding_mode() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a StorageClass resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-kubernetes.storageClass.StorageClass.isConstruct"></a>

```python
from cdktf_cdktf_provider_kubernetes import storage_class

storageClass.StorageClass.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.storageClass.StorageClass.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-kubernetes.storageClass.StorageClass.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_kubernetes import storage_class

storageClass.StorageClass.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.storageClass.StorageClass.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-kubernetes.storageClass.StorageClass.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_kubernetes import storage_class

storageClass.StorageClass.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.storageClass.StorageClass.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-kubernetes.storageClass.StorageClass.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_kubernetes import storage_class

storageClass.StorageClass.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a StorageClass resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.storageClass.StorageClass.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-kubernetes.storageClass.StorageClass.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StorageClass to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-kubernetes.storageClass.StorageClass.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StorageClass that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/storage_class#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.storageClass.StorageClass.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StorageClass to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.property.allowedTopologies">allowed_topologies</a></code> | <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference">StorageClassAllowedTopologiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference">StorageClassMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.property.allowedTopologiesInput">allowed_topologies_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologies">StorageClassAllowedTopologies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.property.allowVolumeExpansionInput">allow_volume_expansion_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.property.metadataInput">metadata_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadata">StorageClassMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.property.mountOptionsInput">mount_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.property.reclaimPolicyInput">reclaim_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.property.storageProvisionerInput">storage_provisioner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.property.volumeBindingModeInput">volume_binding_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.property.allowVolumeExpansion">allow_volume_expansion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.property.mountOptions">mount_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.property.reclaimPolicy">reclaim_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.property.storageProvisioner">storage_provisioner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.property.volumeBindingMode">volume_binding_mode</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.storageClass.StorageClass.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-kubernetes.storageClass.StorageClass.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.storageClass.StorageClass.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-kubernetes.storageClass.StorageClass.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-kubernetes.storageClass.StorageClass.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-kubernetes.storageClass.StorageClass.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-kubernetes.storageClass.StorageClass.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.storageClass.StorageClass.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.storageClass.StorageClass.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.storageClass.StorageClass.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.storageClass.StorageClass.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.storageClass.StorageClass.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.storageClass.StorageClass.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.storageClass.StorageClass.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allowed_topologies`<sup>Required</sup> <a name="allowed_topologies" id="@cdktf/provider-kubernetes.storageClass.StorageClass.property.allowedTopologies"></a>

```python
allowed_topologies: StorageClassAllowedTopologiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference">StorageClassAllowedTopologiesOutputReference</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.storageClass.StorageClass.property.metadata"></a>

```python
metadata: StorageClassMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference">StorageClassMetadataOutputReference</a>

---

##### `allowed_topologies_input`<sup>Optional</sup> <a name="allowed_topologies_input" id="@cdktf/provider-kubernetes.storageClass.StorageClass.property.allowedTopologiesInput"></a>

```python
allowed_topologies_input: StorageClassAllowedTopologies
```

- *Type:* <a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologies">StorageClassAllowedTopologies</a>

---

##### `allow_volume_expansion_input`<sup>Optional</sup> <a name="allow_volume_expansion_input" id="@cdktf/provider-kubernetes.storageClass.StorageClass.property.allowVolumeExpansionInput"></a>

```python
allow_volume_expansion_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-kubernetes.storageClass.StorageClass.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-kubernetes.storageClass.StorageClass.property.metadataInput"></a>

```python
metadata_input: StorageClassMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadata">StorageClassMetadata</a>

---

##### `mount_options_input`<sup>Optional</sup> <a name="mount_options_input" id="@cdktf/provider-kubernetes.storageClass.StorageClass.property.mountOptionsInput"></a>

```python
mount_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-kubernetes.storageClass.StorageClass.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `reclaim_policy_input`<sup>Optional</sup> <a name="reclaim_policy_input" id="@cdktf/provider-kubernetes.storageClass.StorageClass.property.reclaimPolicyInput"></a>

```python
reclaim_policy_input: str
```

- *Type:* str

---

##### `storage_provisioner_input`<sup>Optional</sup> <a name="storage_provisioner_input" id="@cdktf/provider-kubernetes.storageClass.StorageClass.property.storageProvisionerInput"></a>

```python
storage_provisioner_input: str
```

- *Type:* str

---

##### `volume_binding_mode_input`<sup>Optional</sup> <a name="volume_binding_mode_input" id="@cdktf/provider-kubernetes.storageClass.StorageClass.property.volumeBindingModeInput"></a>

```python
volume_binding_mode_input: str
```

- *Type:* str

---

##### `allow_volume_expansion`<sup>Required</sup> <a name="allow_volume_expansion" id="@cdktf/provider-kubernetes.storageClass.StorageClass.property.allowVolumeExpansion"></a>

```python
allow_volume_expansion: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.storageClass.StorageClass.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mount_options`<sup>Required</sup> <a name="mount_options" id="@cdktf/provider-kubernetes.storageClass.StorageClass.property.mountOptions"></a>

```python
mount_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-kubernetes.storageClass.StorageClass.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `reclaim_policy`<sup>Required</sup> <a name="reclaim_policy" id="@cdktf/provider-kubernetes.storageClass.StorageClass.property.reclaimPolicy"></a>

```python
reclaim_policy: str
```

- *Type:* str

---

##### `storage_provisioner`<sup>Required</sup> <a name="storage_provisioner" id="@cdktf/provider-kubernetes.storageClass.StorageClass.property.storageProvisioner"></a>

```python
storage_provisioner: str
```

- *Type:* str

---

##### `volume_binding_mode`<sup>Required</sup> <a name="volume_binding_mode" id="@cdktf/provider-kubernetes.storageClass.StorageClass.property.volumeBindingMode"></a>

```python
volume_binding_mode: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClass.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.storageClass.StorageClass.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StorageClassAllowedTopologies <a name="StorageClassAllowedTopologies" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologies.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import storage_class

storageClass.StorageClassAllowedTopologies(
  match_label_expressions: typing.Union[IResolvable, typing.List[StorageClassAllowedTopologiesMatchLabelExpressions]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologies.property.matchLabelExpressions">match_label_expressions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressions">StorageClassAllowedTopologiesMatchLabelExpressions</a>]]</code> | match_label_expressions block. |

---

##### `match_label_expressions`<sup>Optional</sup> <a name="match_label_expressions" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologies.property.matchLabelExpressions"></a>

```python
match_label_expressions: typing.Union[IResolvable, typing.List[StorageClassAllowedTopologiesMatchLabelExpressions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressions">StorageClassAllowedTopologiesMatchLabelExpressions</a>]]

match_label_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/storage_class#match_label_expressions StorageClass#match_label_expressions}

---

### StorageClassAllowedTopologiesMatchLabelExpressions <a name="StorageClassAllowedTopologiesMatchLabelExpressions" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressions.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import storage_class

storageClass.StorageClassAllowedTopologiesMatchLabelExpressions(
  key: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressions.property.key">key</a></code> | <code>str</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressions.property.values">values</a></code> | <code>typing.List[str]</code> | An array of string values. One value must match the label to be selected. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressions.property.key"></a>

```python
key: str
```

- *Type:* str

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/storage_class#key StorageClass#key}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressions.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

An array of string values. One value must match the label to be selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/storage_class#values StorageClass#values}

---

### StorageClassConfig <a name="StorageClassConfig" id="@cdktf/provider-kubernetes.storageClass.StorageClassConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.storageClass.StorageClassConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import storage_class

storageClass.StorageClassConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: StorageClassMetadata,
  storage_provisioner: str,
  allowed_topologies: StorageClassAllowedTopologies = None,
  allow_volume_expansion: typing.Union[bool, IResolvable] = None,
  id: str = None,
  mount_options: typing.List[str] = None,
  parameters: typing.Mapping[str] = None,
  reclaim_policy: str = None,
  volume_binding_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadata">StorageClassMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassConfig.property.storageProvisioner">storage_provisioner</a></code> | <code>str</code> | Indicates the type of the provisioner. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassConfig.property.allowedTopologies">allowed_topologies</a></code> | <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologies">StorageClassAllowedTopologies</a></code> | allowed_topologies block. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassConfig.property.allowVolumeExpansion">allow_volume_expansion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the storage class allow volume expand. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/storage_class#id StorageClass#id}. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassConfig.property.mountOptions">mount_options</a></code> | <code>typing.List[str]</code> | Persistent Volumes that are dynamically created by a storage class will have the mount options specified. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassConfig.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | The parameters for the provisioner that should create volumes of this storage class. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassConfig.property.reclaimPolicy">reclaim_policy</a></code> | <code>str</code> | Indicates the type of the reclaim policy. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassConfig.property.volumeBindingMode">volume_binding_mode</a></code> | <code>str</code> | Indicates when volume binding and dynamic provisioning should occur. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.storageClass.StorageClassConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.storageClass.StorageClassConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.storageClass.StorageClassConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.storageClass.StorageClassConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.storageClass.StorageClassConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.storageClass.StorageClassConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.storageClass.StorageClassConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.storageClass.StorageClassConfig.property.metadata"></a>

```python
metadata: StorageClassMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadata">StorageClassMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/storage_class#metadata StorageClass#metadata}

---

##### `storage_provisioner`<sup>Required</sup> <a name="storage_provisioner" id="@cdktf/provider-kubernetes.storageClass.StorageClassConfig.property.storageProvisioner"></a>

```python
storage_provisioner: str
```

- *Type:* str

Indicates the type of the provisioner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/storage_class#storage_provisioner StorageClass#storage_provisioner}

---

##### `allowed_topologies`<sup>Optional</sup> <a name="allowed_topologies" id="@cdktf/provider-kubernetes.storageClass.StorageClassConfig.property.allowedTopologies"></a>

```python
allowed_topologies: StorageClassAllowedTopologies
```

- *Type:* <a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologies">StorageClassAllowedTopologies</a>

allowed_topologies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/storage_class#allowed_topologies StorageClass#allowed_topologies}

---

##### `allow_volume_expansion`<sup>Optional</sup> <a name="allow_volume_expansion" id="@cdktf/provider-kubernetes.storageClass.StorageClassConfig.property.allowVolumeExpansion"></a>

```python
allow_volume_expansion: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the storage class allow volume expand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/storage_class#allow_volume_expansion StorageClass#allow_volume_expansion}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.storageClass.StorageClassConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/storage_class#id StorageClass#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mount_options`<sup>Optional</sup> <a name="mount_options" id="@cdktf/provider-kubernetes.storageClass.StorageClassConfig.property.mountOptions"></a>

```python
mount_options: typing.List[str]
```

- *Type:* typing.List[str]

Persistent Volumes that are dynamically created by a storage class will have the mount options specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/storage_class#mount_options StorageClass#mount_options}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-kubernetes.storageClass.StorageClassConfig.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The parameters for the provisioner that should create volumes of this storage class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/storage_class#parameters StorageClass#parameters}

---

##### `reclaim_policy`<sup>Optional</sup> <a name="reclaim_policy" id="@cdktf/provider-kubernetes.storageClass.StorageClassConfig.property.reclaimPolicy"></a>

```python
reclaim_policy: str
```

- *Type:* str

Indicates the type of the reclaim policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/storage_class#reclaim_policy StorageClass#reclaim_policy}

---

##### `volume_binding_mode`<sup>Optional</sup> <a name="volume_binding_mode" id="@cdktf/provider-kubernetes.storageClass.StorageClassConfig.property.volumeBindingMode"></a>

```python
volume_binding_mode: str
```

- *Type:* str

Indicates when volume binding and dynamic provisioning should occur.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/storage_class#volume_binding_mode StorageClass#volume_binding_mode}

---

### StorageClassMetadata <a name="StorageClassMetadata" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import storage_class

storageClass.StorageClassMetadata(
  annotations: typing.Mapping[str] = None,
  generate_name: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadata.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | An unstructured key value map stored with the storage class that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadata.property.generateName">generate_name</a></code> | <code>str</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadata.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the storage class. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadata.property.name">name</a></code> | <code>str</code> | Name of the storage class, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadata.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the storage class that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/storage_class#annotations StorageClass#annotations}

---

##### `generate_name`<sup>Optional</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadata.property.generateName"></a>

```python
generate_name: str
```

- *Type:* str

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/storage_class#generate_name StorageClass#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadata.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the storage class.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/storage_class#labels StorageClass#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadata.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the storage class, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/storage_class#name StorageClass#name}

---

## Classes <a name="Classes" id="Classes"></a>

### StorageClassAllowedTopologiesMatchLabelExpressionsList <a name="StorageClassAllowedTopologiesMatchLabelExpressionsList" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import storage_class

storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressions">StorageClassAllowedTopologiesMatchLabelExpressions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StorageClassAllowedTopologiesMatchLabelExpressions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressions">StorageClassAllowedTopologiesMatchLabelExpressions</a>]]

---


### StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference <a name="StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import storage_class

storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressions">StorageClassAllowedTopologiesMatchLabelExpressions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StorageClassAllowedTopologiesMatchLabelExpressions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressions">StorageClassAllowedTopologiesMatchLabelExpressions</a>]

---


### StorageClassAllowedTopologiesOutputReference <a name="StorageClassAllowedTopologiesOutputReference" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import storage_class

storageClass.StorageClassAllowedTopologiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.putMatchLabelExpressions">put_match_label_expressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.resetMatchLabelExpressions">reset_match_label_expressions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_match_label_expressions` <a name="put_match_label_expressions" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.putMatchLabelExpressions"></a>

```python
def put_match_label_expressions(
  value: typing.Union[IResolvable, typing.List[StorageClassAllowedTopologiesMatchLabelExpressions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.putMatchLabelExpressions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressions">StorageClassAllowedTopologiesMatchLabelExpressions</a>]]

---

##### `reset_match_label_expressions` <a name="reset_match_label_expressions" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.resetMatchLabelExpressions"></a>

```python
def reset_match_label_expressions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.property.matchLabelExpressions">match_label_expressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsList">StorageClassAllowedTopologiesMatchLabelExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.property.matchLabelExpressionsInput">match_label_expressions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressions">StorageClassAllowedTopologiesMatchLabelExpressions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologies">StorageClassAllowedTopologies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_label_expressions`<sup>Required</sup> <a name="match_label_expressions" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.property.matchLabelExpressions"></a>

```python
match_label_expressions: StorageClassAllowedTopologiesMatchLabelExpressionsList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressionsList">StorageClassAllowedTopologiesMatchLabelExpressionsList</a>

---

##### `match_label_expressions_input`<sup>Optional</sup> <a name="match_label_expressions_input" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.property.matchLabelExpressionsInput"></a>

```python
match_label_expressions_input: typing.Union[IResolvable, typing.List[StorageClassAllowedTopologiesMatchLabelExpressions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesMatchLabelExpressions">StorageClassAllowedTopologiesMatchLabelExpressions</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologiesOutputReference.property.internalValue"></a>

```python
internal_value: StorageClassAllowedTopologies
```

- *Type:* <a href="#@cdktf/provider-kubernetes.storageClass.StorageClassAllowedTopologies">StorageClassAllowedTopologies</a>

---


### StorageClassMetadataOutputReference <a name="StorageClassMetadataOutputReference" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import storage_class

storageClass.StorageClassMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.resetGenerateName">reset_generate_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_generate_name` <a name="reset_generate_name" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.resetGenerateName"></a>

```python
def reset_generate_name() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.property.generation">generation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.property.resourceVersion">resource_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.property.generateNameInput">generate_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.property.generateName">generate_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadata">StorageClassMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.property.generation"></a>

```python
generation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_version`<sup>Required</sup> <a name="resource_version" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.property.resourceVersion"></a>

```python
resource_version: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `generate_name_input`<sup>Optional</sup> <a name="generate_name_input" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.property.generateNameInput"></a>

```python
generate_name_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `generate_name`<sup>Required</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.property.generateName"></a>

```python
generate_name: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.storageClass.StorageClassMetadataOutputReference.property.internalValue"></a>

```python
internal_value: StorageClassMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.storageClass.StorageClassMetadata">StorageClassMetadata</a>

---



