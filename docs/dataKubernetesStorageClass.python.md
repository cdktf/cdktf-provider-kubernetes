# `dataKubernetesStorageClass` Submodule <a name="`dataKubernetesStorageClass` Submodule" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataKubernetesStorageClass <a name="DataKubernetesStorageClass" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class kubernetes_storage_class}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_storage_class

dataKubernetesStorageClass.DataKubernetesStorageClass(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: DataKubernetesStorageClassMetadata,
  allowed_topologies: DataKubernetesStorageClassAllowedTopologies = None,
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
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata">DataKubernetesStorageClassMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.allowedTopologies">allowed_topologies</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies">DataKubernetesStorageClassAllowedTopologies</a></code> | allowed_topologies block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.allowVolumeExpansion">allow_volume_expansion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the storage class allow volume expand. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#id DataKubernetesStorageClass#id}. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.mountOptions">mount_options</a></code> | <code>typing.List[str]</code> | Persistent Volumes that are dynamically created by a storage class will have the mount options specified. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | The parameters for the provisioner that should create volumes of this storage class. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.reclaimPolicy">reclaim_policy</a></code> | <code>str</code> | Indicates the type of the reclaim policy. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.volumeBindingMode">volume_binding_mode</a></code> | <code>str</code> | Indicates when volume binding and dynamic provisioning should occur. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata">DataKubernetesStorageClassMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#metadata DataKubernetesStorageClass#metadata}

---

##### `allowed_topologies`<sup>Optional</sup> <a name="allowed_topologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.allowedTopologies"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies">DataKubernetesStorageClassAllowedTopologies</a>

allowed_topologies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#allowed_topologies DataKubernetesStorageClass#allowed_topologies}

---

##### `allow_volume_expansion`<sup>Optional</sup> <a name="allow_volume_expansion" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.allowVolumeExpansion"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the storage class allow volume expand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#allow_volume_expansion DataKubernetesStorageClass#allow_volume_expansion}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#id DataKubernetesStorageClass#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mount_options`<sup>Optional</sup> <a name="mount_options" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.mountOptions"></a>

- *Type:* typing.List[str]

Persistent Volumes that are dynamically created by a storage class will have the mount options specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#mount_options DataKubernetesStorageClass#mount_options}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

The parameters for the provisioner that should create volumes of this storage class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#parameters DataKubernetesStorageClass#parameters}

---

##### `reclaim_policy`<sup>Optional</sup> <a name="reclaim_policy" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.reclaimPolicy"></a>

- *Type:* str

Indicates the type of the reclaim policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#reclaim_policy DataKubernetesStorageClass#reclaim_policy}

---

##### `volume_binding_mode`<sup>Optional</sup> <a name="volume_binding_mode" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.volumeBindingMode"></a>

- *Type:* str

Indicates when volume binding and dynamic provisioning should occur.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#volume_binding_mode DataKubernetesStorageClass#volume_binding_mode}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.putAllowedTopologies">put_allowed_topologies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetAllowedTopologies">reset_allowed_topologies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetAllowVolumeExpansion">reset_allow_volume_expansion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetMountOptions">reset_mount_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetReclaimPolicy">reset_reclaim_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetVolumeBindingMode">reset_volume_binding_mode</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_allowed_topologies` <a name="put_allowed_topologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.putAllowedTopologies"></a>

```python
def put_allowed_topologies(
  match_label_expressions: typing.Union[IResolvable, typing.List[DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions]] = None
) -> None
```

###### `match_label_expressions`<sup>Optional</sup> <a name="match_label_expressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.putAllowedTopologies.parameter.matchLabelExpressions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions</a>]]

match_label_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#match_label_expressions DataKubernetesStorageClass#match_label_expressions}

---

##### `put_metadata` <a name="put_metadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.putMetadata"></a>

```python
def put_metadata(
  annotations: typing.Mapping[str] = None,
  labels: typing.Mapping[str] = None,
  name: str = None
) -> None
```

###### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.putMetadata.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the storage class that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#annotations DataKubernetesStorageClass#annotations}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.putMetadata.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the storage class.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#labels DataKubernetesStorageClass#labels}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.putMetadata.parameter.name"></a>

- *Type:* str

Name of the storage class, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#name DataKubernetesStorageClass#name}

---

##### `reset_allowed_topologies` <a name="reset_allowed_topologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetAllowedTopologies"></a>

```python
def reset_allowed_topologies() -> None
```

##### `reset_allow_volume_expansion` <a name="reset_allow_volume_expansion" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetAllowVolumeExpansion"></a>

```python
def reset_allow_volume_expansion() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_mount_options` <a name="reset_mount_options" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetMountOptions"></a>

```python
def reset_mount_options() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_reclaim_policy` <a name="reset_reclaim_policy" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetReclaimPolicy"></a>

```python
def reset_reclaim_policy() -> None
```

##### `reset_volume_binding_mode` <a name="reset_volume_binding_mode" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetVolumeBindingMode"></a>

```python
def reset_volume_binding_mode() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataKubernetesStorageClass resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.isConstruct"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_storage_class

dataKubernetesStorageClass.DataKubernetesStorageClass.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_storage_class

dataKubernetesStorageClass.DataKubernetesStorageClass.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_storage_class

dataKubernetesStorageClass.DataKubernetesStorageClass.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_storage_class

dataKubernetesStorageClass.DataKubernetesStorageClass.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataKubernetesStorageClass resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataKubernetesStorageClass to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataKubernetesStorageClass that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataKubernetesStorageClass to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.allowedTopologies">allowed_topologies</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference">DataKubernetesStorageClassAllowedTopologiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference">DataKubernetesStorageClassMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.storageProvisioner">storage_provisioner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.allowedTopologiesInput">allowed_topologies_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies">DataKubernetesStorageClassAllowedTopologies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.allowVolumeExpansionInput">allow_volume_expansion_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.metadataInput">metadata_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata">DataKubernetesStorageClassMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.mountOptionsInput">mount_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.reclaimPolicyInput">reclaim_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.volumeBindingModeInput">volume_binding_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.allowVolumeExpansion">allow_volume_expansion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.mountOptions">mount_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.reclaimPolicy">reclaim_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.volumeBindingMode">volume_binding_mode</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `allowed_topologies`<sup>Required</sup> <a name="allowed_topologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.allowedTopologies"></a>

```python
allowed_topologies: DataKubernetesStorageClassAllowedTopologiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference">DataKubernetesStorageClassAllowedTopologiesOutputReference</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.metadata"></a>

```python
metadata: DataKubernetesStorageClassMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference">DataKubernetesStorageClassMetadataOutputReference</a>

---

##### `storage_provisioner`<sup>Required</sup> <a name="storage_provisioner" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.storageProvisioner"></a>

```python
storage_provisioner: str
```

- *Type:* str

---

##### `allowed_topologies_input`<sup>Optional</sup> <a name="allowed_topologies_input" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.allowedTopologiesInput"></a>

```python
allowed_topologies_input: DataKubernetesStorageClassAllowedTopologies
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies">DataKubernetesStorageClassAllowedTopologies</a>

---

##### `allow_volume_expansion_input`<sup>Optional</sup> <a name="allow_volume_expansion_input" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.allowVolumeExpansionInput"></a>

```python
allow_volume_expansion_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.metadataInput"></a>

```python
metadata_input: DataKubernetesStorageClassMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata">DataKubernetesStorageClassMetadata</a>

---

##### `mount_options_input`<sup>Optional</sup> <a name="mount_options_input" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.mountOptionsInput"></a>

```python
mount_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `reclaim_policy_input`<sup>Optional</sup> <a name="reclaim_policy_input" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.reclaimPolicyInput"></a>

```python
reclaim_policy_input: str
```

- *Type:* str

---

##### `volume_binding_mode_input`<sup>Optional</sup> <a name="volume_binding_mode_input" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.volumeBindingModeInput"></a>

```python
volume_binding_mode_input: str
```

- *Type:* str

---

##### `allow_volume_expansion`<sup>Required</sup> <a name="allow_volume_expansion" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.allowVolumeExpansion"></a>

```python
allow_volume_expansion: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mount_options`<sup>Required</sup> <a name="mount_options" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.mountOptions"></a>

```python
mount_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `reclaim_policy`<sup>Required</sup> <a name="reclaim_policy" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.reclaimPolicy"></a>

```python
reclaim_policy: str
```

- *Type:* str

---

##### `volume_binding_mode`<sup>Required</sup> <a name="volume_binding_mode" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.volumeBindingMode"></a>

```python
volume_binding_mode: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataKubernetesStorageClassAllowedTopologies <a name="DataKubernetesStorageClassAllowedTopologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_storage_class

dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies(
  match_label_expressions: typing.Union[IResolvable, typing.List[DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies.property.matchLabelExpressions">match_label_expressions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions</a>]]</code> | match_label_expressions block. |

---

##### `match_label_expressions`<sup>Optional</sup> <a name="match_label_expressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies.property.matchLabelExpressions"></a>

```python
match_label_expressions: typing.Union[IResolvable, typing.List[DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions</a>]]

match_label_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#match_label_expressions DataKubernetesStorageClass#match_label_expressions}

---

### DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions <a name="DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_storage_class

dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions(
  key: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions.property.key">key</a></code> | <code>str</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions.property.values">values</a></code> | <code>typing.List[str]</code> | An array of string values. One value must match the label to be selected. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions.property.key"></a>

```python
key: str
```

- *Type:* str

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#key DataKubernetesStorageClass#key}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

An array of string values. One value must match the label to be selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#values DataKubernetesStorageClass#values}

---

### DataKubernetesStorageClassConfig <a name="DataKubernetesStorageClassConfig" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_storage_class

dataKubernetesStorageClass.DataKubernetesStorageClassConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: DataKubernetesStorageClassMetadata,
  allowed_topologies: DataKubernetesStorageClassAllowedTopologies = None,
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
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata">DataKubernetesStorageClassMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.allowedTopologies">allowed_topologies</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies">DataKubernetesStorageClassAllowedTopologies</a></code> | allowed_topologies block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.allowVolumeExpansion">allow_volume_expansion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the storage class allow volume expand. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#id DataKubernetesStorageClass#id}. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.mountOptions">mount_options</a></code> | <code>typing.List[str]</code> | Persistent Volumes that are dynamically created by a storage class will have the mount options specified. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | The parameters for the provisioner that should create volumes of this storage class. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.reclaimPolicy">reclaim_policy</a></code> | <code>str</code> | Indicates the type of the reclaim policy. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.volumeBindingMode">volume_binding_mode</a></code> | <code>str</code> | Indicates when volume binding and dynamic provisioning should occur. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.metadata"></a>

```python
metadata: DataKubernetesStorageClassMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata">DataKubernetesStorageClassMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#metadata DataKubernetesStorageClass#metadata}

---

##### `allowed_topologies`<sup>Optional</sup> <a name="allowed_topologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.allowedTopologies"></a>

```python
allowed_topologies: DataKubernetesStorageClassAllowedTopologies
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies">DataKubernetesStorageClassAllowedTopologies</a>

allowed_topologies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#allowed_topologies DataKubernetesStorageClass#allowed_topologies}

---

##### `allow_volume_expansion`<sup>Optional</sup> <a name="allow_volume_expansion" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.allowVolumeExpansion"></a>

```python
allow_volume_expansion: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the storage class allow volume expand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#allow_volume_expansion DataKubernetesStorageClass#allow_volume_expansion}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#id DataKubernetesStorageClass#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mount_options`<sup>Optional</sup> <a name="mount_options" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.mountOptions"></a>

```python
mount_options: typing.List[str]
```

- *Type:* typing.List[str]

Persistent Volumes that are dynamically created by a storage class will have the mount options specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#mount_options DataKubernetesStorageClass#mount_options}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The parameters for the provisioner that should create volumes of this storage class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#parameters DataKubernetesStorageClass#parameters}

---

##### `reclaim_policy`<sup>Optional</sup> <a name="reclaim_policy" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.reclaimPolicy"></a>

```python
reclaim_policy: str
```

- *Type:* str

Indicates the type of the reclaim policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#reclaim_policy DataKubernetesStorageClass#reclaim_policy}

---

##### `volume_binding_mode`<sup>Optional</sup> <a name="volume_binding_mode" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.volumeBindingMode"></a>

```python
volume_binding_mode: str
```

- *Type:* str

Indicates when volume binding and dynamic provisioning should occur.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#volume_binding_mode DataKubernetesStorageClass#volume_binding_mode}

---

### DataKubernetesStorageClassMetadata <a name="DataKubernetesStorageClassMetadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_storage_class

dataKubernetesStorageClass.DataKubernetesStorageClassMetadata(
  annotations: typing.Mapping[str] = None,
  labels: typing.Mapping[str] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | An unstructured key value map stored with the storage class that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the storage class. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata.property.name">name</a></code> | <code>str</code> | Name of the storage class, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the storage class that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#annotations DataKubernetesStorageClass#annotations}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the storage class.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#labels DataKubernetesStorageClass#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the storage class, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#name DataKubernetesStorageClass#name}

---

## Classes <a name="Classes" id="Classes"></a>

### DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList <a name="DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_storage_class

dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions</a>]]

---


### DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference <a name="DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_storage_class

dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions</a>]

---


### DataKubernetesStorageClassAllowedTopologiesOutputReference <a name="DataKubernetesStorageClassAllowedTopologiesOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_storage_class

dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.putMatchLabelExpressions">put_match_label_expressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.resetMatchLabelExpressions">reset_match_label_expressions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_match_label_expressions` <a name="put_match_label_expressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.putMatchLabelExpressions"></a>

```python
def put_match_label_expressions(
  value: typing.Union[IResolvable, typing.List[DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.putMatchLabelExpressions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions</a>]]

---

##### `reset_match_label_expressions` <a name="reset_match_label_expressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.resetMatchLabelExpressions"></a>

```python
def reset_match_label_expressions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.property.matchLabelExpressions">match_label_expressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList">DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.property.matchLabelExpressionsInput">match_label_expressions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies">DataKubernetesStorageClassAllowedTopologies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_label_expressions`<sup>Required</sup> <a name="match_label_expressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.property.matchLabelExpressions"></a>

```python
match_label_expressions: DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList">DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList</a>

---

##### `match_label_expressions_input`<sup>Optional</sup> <a name="match_label_expressions_input" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.property.matchLabelExpressionsInput"></a>

```python
match_label_expressions_input: typing.Union[IResolvable, typing.List[DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.property.internalValue"></a>

```python
internal_value: DataKubernetesStorageClassAllowedTopologies
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies">DataKubernetesStorageClassAllowedTopologies</a>

---


### DataKubernetesStorageClassMetadataOutputReference <a name="DataKubernetesStorageClassMetadataOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_storage_class

dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.generation">generation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.resourceVersion">resource_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata">DataKubernetesStorageClassMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.generation"></a>

```python
generation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_version`<sup>Required</sup> <a name="resource_version" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.resourceVersion"></a>

```python
resource_version: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataKubernetesStorageClassMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata">DataKubernetesStorageClassMetadata</a>

---



