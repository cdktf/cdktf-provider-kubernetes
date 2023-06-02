# `data_kubernetes_storage_class_v1`

Refer to the Terraform Registory for docs: [`data_kubernetes_storage_class_v1`](https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/data-sources/storage_class_v1).

# `dataKubernetesStorageClassV1` Submodule <a name="`dataKubernetesStorageClassV1` Submodule" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataKubernetesStorageClassV1 <a name="DataKubernetesStorageClassV1" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/data-sources/storage_class_v1 kubernetes_storage_class_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_storage_class_v1

dataKubernetesStorageClassV1.DataKubernetesStorageClassV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: DataKubernetesStorageClassV1Metadata,
  allowed_topologies: DataKubernetesStorageClassV1AllowedTopologies = None,
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
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata">DataKubernetesStorageClassV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.allowedTopologies">allowed_topologies</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies">DataKubernetesStorageClassV1AllowedTopologies</a></code> | allowed_topologies block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.allowVolumeExpansion">allow_volume_expansion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the storage class allow volume expand. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/data-sources/storage_class_v1#id DataKubernetesStorageClassV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.mountOptions">mount_options</a></code> | <code>typing.List[str]</code> | Persistent Volumes that are dynamically created by a storage class will have the mount options specified. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | The parameters for the provisioner that should create volumes of this storage class. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.reclaimPolicy">reclaim_policy</a></code> | <code>str</code> | Indicates the type of the reclaim policy. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.volumeBindingMode">volume_binding_mode</a></code> | <code>str</code> | Indicates when volume binding and dynamic provisioning should occur. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata">DataKubernetesStorageClassV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/data-sources/storage_class_v1#metadata DataKubernetesStorageClassV1#metadata}

---

##### `allowed_topologies`<sup>Optional</sup> <a name="allowed_topologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.allowedTopologies"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies">DataKubernetesStorageClassV1AllowedTopologies</a>

allowed_topologies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/data-sources/storage_class_v1#allowed_topologies DataKubernetesStorageClassV1#allowed_topologies}

---

##### `allow_volume_expansion`<sup>Optional</sup> <a name="allow_volume_expansion" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.allowVolumeExpansion"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the storage class allow volume expand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/data-sources/storage_class_v1#allow_volume_expansion DataKubernetesStorageClassV1#allow_volume_expansion}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/data-sources/storage_class_v1#id DataKubernetesStorageClassV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mount_options`<sup>Optional</sup> <a name="mount_options" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.mountOptions"></a>

- *Type:* typing.List[str]

Persistent Volumes that are dynamically created by a storage class will have the mount options specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/data-sources/storage_class_v1#mount_options DataKubernetesStorageClassV1#mount_options}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

The parameters for the provisioner that should create volumes of this storage class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/data-sources/storage_class_v1#parameters DataKubernetesStorageClassV1#parameters}

---

##### `reclaim_policy`<sup>Optional</sup> <a name="reclaim_policy" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.reclaimPolicy"></a>

- *Type:* str

Indicates the type of the reclaim policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/data-sources/storage_class_v1#reclaim_policy DataKubernetesStorageClassV1#reclaim_policy}

---

##### `volume_binding_mode`<sup>Optional</sup> <a name="volume_binding_mode" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.volumeBindingMode"></a>

- *Type:* str

Indicates when volume binding and dynamic provisioning should occur.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/data-sources/storage_class_v1#volume_binding_mode DataKubernetesStorageClassV1#volume_binding_mode}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.putAllowedTopologies">put_allowed_topologies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetAllowedTopologies">reset_allowed_topologies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetAllowVolumeExpansion">reset_allow_volume_expansion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetMountOptions">reset_mount_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetReclaimPolicy">reset_reclaim_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetVolumeBindingMode">reset_volume_binding_mode</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_allowed_topologies` <a name="put_allowed_topologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.putAllowedTopologies"></a>

```python
def put_allowed_topologies(
  match_label_expressions: typing.Union[IResolvable, typing.List[DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions]] = None
) -> None
```

###### `match_label_expressions`<sup>Optional</sup> <a name="match_label_expressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.putAllowedTopologies.parameter.matchLabelExpressions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions</a>]]

match_label_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/data-sources/storage_class_v1#match_label_expressions DataKubernetesStorageClassV1#match_label_expressions}

---

##### `put_metadata` <a name="put_metadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.putMetadata"></a>

```python
def put_metadata(
  annotations: typing.Mapping[str] = None,
  labels: typing.Mapping[str] = None,
  name: str = None
) -> None
```

###### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.putMetadata.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the storage class that may be used to store arbitrary metadata.

More info: http://kubernetes.io/docs/user-guide/annotations

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/data-sources/storage_class_v1#annotations DataKubernetesStorageClassV1#annotations}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.putMetadata.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the storage class.

May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/data-sources/storage_class_v1#labels DataKubernetesStorageClassV1#labels}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.putMetadata.parameter.name"></a>

- *Type:* str

Name of the storage class, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/data-sources/storage_class_v1#name DataKubernetesStorageClassV1#name}

---

##### `reset_allowed_topologies` <a name="reset_allowed_topologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetAllowedTopologies"></a>

```python
def reset_allowed_topologies() -> None
```

##### `reset_allow_volume_expansion` <a name="reset_allow_volume_expansion" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetAllowVolumeExpansion"></a>

```python
def reset_allow_volume_expansion() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_mount_options` <a name="reset_mount_options" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetMountOptions"></a>

```python
def reset_mount_options() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_reclaim_policy` <a name="reset_reclaim_policy" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetReclaimPolicy"></a>

```python
def reset_reclaim_policy() -> None
```

##### `reset_volume_binding_mode` <a name="reset_volume_binding_mode" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetVolumeBindingMode"></a>

```python
def reset_volume_binding_mode() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_storage_class_v1

dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_storage_class_v1

dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_storage_class_v1

dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.allowedTopologies">allowed_topologies</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference">DataKubernetesStorageClassV1AllowedTopologiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference">DataKubernetesStorageClassV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.storageProvisioner">storage_provisioner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.allowedTopologiesInput">allowed_topologies_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies">DataKubernetesStorageClassV1AllowedTopologies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.allowVolumeExpansionInput">allow_volume_expansion_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.metadataInput">metadata_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata">DataKubernetesStorageClassV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.mountOptionsInput">mount_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.reclaimPolicyInput">reclaim_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.volumeBindingModeInput">volume_binding_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.allowVolumeExpansion">allow_volume_expansion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.mountOptions">mount_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.reclaimPolicy">reclaim_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.volumeBindingMode">volume_binding_mode</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `allowed_topologies`<sup>Required</sup> <a name="allowed_topologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.allowedTopologies"></a>

```python
allowed_topologies: DataKubernetesStorageClassV1AllowedTopologiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference">DataKubernetesStorageClassV1AllowedTopologiesOutputReference</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.metadata"></a>

```python
metadata: DataKubernetesStorageClassV1MetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference">DataKubernetesStorageClassV1MetadataOutputReference</a>

---

##### `storage_provisioner`<sup>Required</sup> <a name="storage_provisioner" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.storageProvisioner"></a>

```python
storage_provisioner: str
```

- *Type:* str

---

##### `allowed_topologies_input`<sup>Optional</sup> <a name="allowed_topologies_input" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.allowedTopologiesInput"></a>

```python
allowed_topologies_input: DataKubernetesStorageClassV1AllowedTopologies
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies">DataKubernetesStorageClassV1AllowedTopologies</a>

---

##### `allow_volume_expansion_input`<sup>Optional</sup> <a name="allow_volume_expansion_input" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.allowVolumeExpansionInput"></a>

```python
allow_volume_expansion_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.metadataInput"></a>

```python
metadata_input: DataKubernetesStorageClassV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata">DataKubernetesStorageClassV1Metadata</a>

---

##### `mount_options_input`<sup>Optional</sup> <a name="mount_options_input" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.mountOptionsInput"></a>

```python
mount_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `reclaim_policy_input`<sup>Optional</sup> <a name="reclaim_policy_input" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.reclaimPolicyInput"></a>

```python
reclaim_policy_input: str
```

- *Type:* str

---

##### `volume_binding_mode_input`<sup>Optional</sup> <a name="volume_binding_mode_input" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.volumeBindingModeInput"></a>

```python
volume_binding_mode_input: str
```

- *Type:* str

---

##### `allow_volume_expansion`<sup>Required</sup> <a name="allow_volume_expansion" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.allowVolumeExpansion"></a>

```python
allow_volume_expansion: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mount_options`<sup>Required</sup> <a name="mount_options" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.mountOptions"></a>

```python
mount_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `reclaim_policy`<sup>Required</sup> <a name="reclaim_policy" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.reclaimPolicy"></a>

```python
reclaim_policy: str
```

- *Type:* str

---

##### `volume_binding_mode`<sup>Required</sup> <a name="volume_binding_mode" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.volumeBindingMode"></a>

```python
volume_binding_mode: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataKubernetesStorageClassV1AllowedTopologies <a name="DataKubernetesStorageClassV1AllowedTopologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_storage_class_v1

dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies(
  match_label_expressions: typing.Union[IResolvable, typing.List[DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies.property.matchLabelExpressions">match_label_expressions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions</a>]]</code> | match_label_expressions block. |

---

##### `match_label_expressions`<sup>Optional</sup> <a name="match_label_expressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies.property.matchLabelExpressions"></a>

```python
match_label_expressions: typing.Union[IResolvable, typing.List[DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions</a>]]

match_label_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/data-sources/storage_class_v1#match_label_expressions DataKubernetesStorageClassV1#match_label_expressions}

---

### DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions <a name="DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_storage_class_v1

dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions(
  key: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions.property.key">key</a></code> | <code>str</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions.property.values">values</a></code> | <code>typing.List[str]</code> | An array of string values. One value must match the label to be selected. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions.property.key"></a>

```python
key: str
```

- *Type:* str

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/data-sources/storage_class_v1#key DataKubernetesStorageClassV1#key}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

An array of string values. One value must match the label to be selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/data-sources/storage_class_v1#values DataKubernetesStorageClassV1#values}

---

### DataKubernetesStorageClassV1Config <a name="DataKubernetesStorageClassV1Config" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_storage_class_v1

dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: DataKubernetesStorageClassV1Metadata,
  allowed_topologies: DataKubernetesStorageClassV1AllowedTopologies = None,
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
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata">DataKubernetesStorageClassV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.allowedTopologies">allowed_topologies</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies">DataKubernetesStorageClassV1AllowedTopologies</a></code> | allowed_topologies block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.allowVolumeExpansion">allow_volume_expansion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the storage class allow volume expand. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/data-sources/storage_class_v1#id DataKubernetesStorageClassV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.mountOptions">mount_options</a></code> | <code>typing.List[str]</code> | Persistent Volumes that are dynamically created by a storage class will have the mount options specified. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | The parameters for the provisioner that should create volumes of this storage class. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.reclaimPolicy">reclaim_policy</a></code> | <code>str</code> | Indicates the type of the reclaim policy. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.volumeBindingMode">volume_binding_mode</a></code> | <code>str</code> | Indicates when volume binding and dynamic provisioning should occur. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.metadata"></a>

```python
metadata: DataKubernetesStorageClassV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata">DataKubernetesStorageClassV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/data-sources/storage_class_v1#metadata DataKubernetesStorageClassV1#metadata}

---

##### `allowed_topologies`<sup>Optional</sup> <a name="allowed_topologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.allowedTopologies"></a>

```python
allowed_topologies: DataKubernetesStorageClassV1AllowedTopologies
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies">DataKubernetesStorageClassV1AllowedTopologies</a>

allowed_topologies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/data-sources/storage_class_v1#allowed_topologies DataKubernetesStorageClassV1#allowed_topologies}

---

##### `allow_volume_expansion`<sup>Optional</sup> <a name="allow_volume_expansion" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.allowVolumeExpansion"></a>

```python
allow_volume_expansion: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the storage class allow volume expand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/data-sources/storage_class_v1#allow_volume_expansion DataKubernetesStorageClassV1#allow_volume_expansion}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/data-sources/storage_class_v1#id DataKubernetesStorageClassV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mount_options`<sup>Optional</sup> <a name="mount_options" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.mountOptions"></a>

```python
mount_options: typing.List[str]
```

- *Type:* typing.List[str]

Persistent Volumes that are dynamically created by a storage class will have the mount options specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/data-sources/storage_class_v1#mount_options DataKubernetesStorageClassV1#mount_options}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The parameters for the provisioner that should create volumes of this storage class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/data-sources/storage_class_v1#parameters DataKubernetesStorageClassV1#parameters}

---

##### `reclaim_policy`<sup>Optional</sup> <a name="reclaim_policy" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.reclaimPolicy"></a>

```python
reclaim_policy: str
```

- *Type:* str

Indicates the type of the reclaim policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/data-sources/storage_class_v1#reclaim_policy DataKubernetesStorageClassV1#reclaim_policy}

---

##### `volume_binding_mode`<sup>Optional</sup> <a name="volume_binding_mode" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.volumeBindingMode"></a>

```python
volume_binding_mode: str
```

- *Type:* str

Indicates when volume binding and dynamic provisioning should occur.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/data-sources/storage_class_v1#volume_binding_mode DataKubernetesStorageClassV1#volume_binding_mode}

---

### DataKubernetesStorageClassV1Metadata <a name="DataKubernetesStorageClassV1Metadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_storage_class_v1

dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata(
  annotations: typing.Mapping[str] = None,
  labels: typing.Mapping[str] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | An unstructured key value map stored with the storage class that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the storage class. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata.property.name">name</a></code> | <code>str</code> | Name of the storage class, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the storage class that may be used to store arbitrary metadata.

More info: http://kubernetes.io/docs/user-guide/annotations

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/data-sources/storage_class_v1#annotations DataKubernetesStorageClassV1#annotations}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the storage class.

May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/data-sources/storage_class_v1#labels DataKubernetesStorageClassV1#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the storage class, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/data-sources/storage_class_v1#name DataKubernetesStorageClassV1#name}

---

## Classes <a name="Classes" id="Classes"></a>

### DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList <a name="DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_storage_class_v1

dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions</a>]]

---


### DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference <a name="DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_storage_class_v1

dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions</a>, cdktf.IResolvable]

---


### DataKubernetesStorageClassV1AllowedTopologiesOutputReference <a name="DataKubernetesStorageClassV1AllowedTopologiesOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_storage_class_v1

dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.putMatchLabelExpressions">put_match_label_expressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.resetMatchLabelExpressions">reset_match_label_expressions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_match_label_expressions` <a name="put_match_label_expressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.putMatchLabelExpressions"></a>

```python
def put_match_label_expressions(
  value: typing.Union[IResolvable, typing.List[DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.putMatchLabelExpressions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions</a>]]

---

##### `reset_match_label_expressions` <a name="reset_match_label_expressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.resetMatchLabelExpressions"></a>

```python
def reset_match_label_expressions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.property.matchLabelExpressions">match_label_expressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList">DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.property.matchLabelExpressionsInput">match_label_expressions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies">DataKubernetesStorageClassV1AllowedTopologies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_label_expressions`<sup>Required</sup> <a name="match_label_expressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.property.matchLabelExpressions"></a>

```python
match_label_expressions: DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList">DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList</a>

---

##### `match_label_expressions_input`<sup>Optional</sup> <a name="match_label_expressions_input" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.property.matchLabelExpressionsInput"></a>

```python
match_label_expressions_input: typing.Union[IResolvable, typing.List[DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.property.internalValue"></a>

```python
internal_value: DataKubernetesStorageClassV1AllowedTopologies
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies">DataKubernetesStorageClassV1AllowedTopologies</a>

---


### DataKubernetesStorageClassV1MetadataOutputReference <a name="DataKubernetesStorageClassV1MetadataOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_storage_class_v1

dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.generation">generation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.resourceVersion">resource_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata">DataKubernetesStorageClassV1Metadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.generation"></a>

```python
generation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_version`<sup>Required</sup> <a name="resource_version" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.resourceVersion"></a>

```python
resource_version: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataKubernetesStorageClassV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata">DataKubernetesStorageClassV1Metadata</a>

---



