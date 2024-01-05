# `dataKubernetesEndpointsV1` Submodule <a name="`dataKubernetesEndpointsV1` Submodule" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataKubernetesEndpointsV1 <a name="DataKubernetesEndpointsV1" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/endpoints_v1 kubernetes_endpoints_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_endpoints_v1

dataKubernetesEndpointsV1.DataKubernetesEndpointsV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: DataKubernetesEndpointsV1Metadata,
  id: str = None,
  subset: typing.Union[IResolvable, typing.List[DataKubernetesEndpointsV1Subset]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata">DataKubernetesEndpointsV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/endpoints_v1#id DataKubernetesEndpointsV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.subset">subset</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset">DataKubernetesEndpointsV1Subset</a>]]</code> | subset block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata">DataKubernetesEndpointsV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/endpoints_v1#metadata DataKubernetesEndpointsV1#metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/endpoints_v1#id DataKubernetesEndpointsV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subset`<sup>Optional</sup> <a name="subset" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.subset"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset">DataKubernetesEndpointsV1Subset</a>]]

subset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/endpoints_v1#subset DataKubernetesEndpointsV1#subset}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.putSubset">put_subset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.resetSubset">reset_subset</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_metadata` <a name="put_metadata" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.putMetadata"></a>

```python
def put_metadata(
  annotations: typing.Mapping[str] = None,
  generate_name: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  namespace: str = None
) -> None
```

###### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.putMetadata.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the endpoints that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/endpoints_v1#annotations DataKubernetesEndpointsV1#annotations}

---

###### `generate_name`<sup>Optional</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.putMetadata.parameter.generateName"></a>

- *Type:* str

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/endpoints_v1#generate_name DataKubernetesEndpointsV1#generate_name}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.putMetadata.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the endpoints.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/endpoints_v1#labels DataKubernetesEndpointsV1#labels}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.putMetadata.parameter.name"></a>

- *Type:* str

Name of the endpoints, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/endpoints_v1#name DataKubernetesEndpointsV1#name}

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.putMetadata.parameter.namespace"></a>

- *Type:* str

Namespace defines the space within which name of the endpoints must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/endpoints_v1#namespace DataKubernetesEndpointsV1#namespace}

---

##### `put_subset` <a name="put_subset" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.putSubset"></a>

```python
def put_subset(
  value: typing.Union[IResolvable, typing.List[DataKubernetesEndpointsV1Subset]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.putSubset.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset">DataKubernetesEndpointsV1Subset</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_subset` <a name="reset_subset" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.resetSubset"></a>

```python
def reset_subset() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataKubernetesEndpointsV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_endpoints_v1

dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_endpoints_v1

dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_endpoints_v1

dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_endpoints_v1

dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataKubernetesEndpointsV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataKubernetesEndpointsV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataKubernetesEndpointsV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/endpoints_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataKubernetesEndpointsV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference">DataKubernetesEndpointsV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.subset">subset</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList">DataKubernetesEndpointsV1SubsetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.metadataInput">metadata_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata">DataKubernetesEndpointsV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.subsetInput">subset_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset">DataKubernetesEndpointsV1Subset</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.metadata"></a>

```python
metadata: DataKubernetesEndpointsV1MetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference">DataKubernetesEndpointsV1MetadataOutputReference</a>

---

##### `subset`<sup>Required</sup> <a name="subset" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.subset"></a>

```python
subset: DataKubernetesEndpointsV1SubsetList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList">DataKubernetesEndpointsV1SubsetList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.metadataInput"></a>

```python
metadata_input: DataKubernetesEndpointsV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata">DataKubernetesEndpointsV1Metadata</a>

---

##### `subset_input`<sup>Optional</sup> <a name="subset_input" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.subsetInput"></a>

```python
subset_input: typing.Union[IResolvable, typing.List[DataKubernetesEndpointsV1Subset]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset">DataKubernetesEndpointsV1Subset</a>]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataKubernetesEndpointsV1Config <a name="DataKubernetesEndpointsV1Config" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_endpoints_v1

dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: DataKubernetesEndpointsV1Metadata,
  id: str = None,
  subset: typing.Union[IResolvable, typing.List[DataKubernetesEndpointsV1Subset]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata">DataKubernetesEndpointsV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/endpoints_v1#id DataKubernetesEndpointsV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.subset">subset</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset">DataKubernetesEndpointsV1Subset</a>]]</code> | subset block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.metadata"></a>

```python
metadata: DataKubernetesEndpointsV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata">DataKubernetesEndpointsV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/endpoints_v1#metadata DataKubernetesEndpointsV1#metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/endpoints_v1#id DataKubernetesEndpointsV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subset`<sup>Optional</sup> <a name="subset" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.subset"></a>

```python
subset: typing.Union[IResolvable, typing.List[DataKubernetesEndpointsV1Subset]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset">DataKubernetesEndpointsV1Subset</a>]]

subset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/endpoints_v1#subset DataKubernetesEndpointsV1#subset}

---

### DataKubernetesEndpointsV1Metadata <a name="DataKubernetesEndpointsV1Metadata" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_endpoints_v1

dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata(
  annotations: typing.Mapping[str] = None,
  generate_name: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | An unstructured key value map stored with the endpoints that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata.property.generateName">generate_name</a></code> | <code>str</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the endpoints. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata.property.name">name</a></code> | <code>str</code> | Name of the endpoints, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata.property.namespace">namespace</a></code> | <code>str</code> | Namespace defines the space within which name of the endpoints must be unique. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the endpoints that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/endpoints_v1#annotations DataKubernetesEndpointsV1#annotations}

---

##### `generate_name`<sup>Optional</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata.property.generateName"></a>

```python
generate_name: str
```

- *Type:* str

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/endpoints_v1#generate_name DataKubernetesEndpointsV1#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the endpoints.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/endpoints_v1#labels DataKubernetesEndpointsV1#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the endpoints, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/endpoints_v1#name DataKubernetesEndpointsV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Namespace defines the space within which name of the endpoints must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/endpoints_v1#namespace DataKubernetesEndpointsV1#namespace}

---

### DataKubernetesEndpointsV1Subset <a name="DataKubernetesEndpointsV1Subset" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_endpoints_v1

dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset(
  address: typing.Union[IResolvable, typing.List[DataKubernetesEndpointsV1SubsetAddress]] = None,
  not_ready_address: typing.Union[IResolvable, typing.List[DataKubernetesEndpointsV1SubsetNotReadyAddress]] = None,
  port: typing.Union[IResolvable, typing.List[DataKubernetesEndpointsV1SubsetPort]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset.property.address">address</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress">DataKubernetesEndpointsV1SubsetAddress</a>]]</code> | address block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset.property.notReadyAddress">not_ready_address</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress">DataKubernetesEndpointsV1SubsetNotReadyAddress</a>]]</code> | not_ready_address block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset.property.port">port</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort">DataKubernetesEndpointsV1SubsetPort</a>]]</code> | port block. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset.property.address"></a>

```python
address: typing.Union[IResolvable, typing.List[DataKubernetesEndpointsV1SubsetAddress]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress">DataKubernetesEndpointsV1SubsetAddress</a>]]

address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/endpoints_v1#address DataKubernetesEndpointsV1#address}

---

##### `not_ready_address`<sup>Optional</sup> <a name="not_ready_address" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset.property.notReadyAddress"></a>

```python
not_ready_address: typing.Union[IResolvable, typing.List[DataKubernetesEndpointsV1SubsetNotReadyAddress]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress">DataKubernetesEndpointsV1SubsetNotReadyAddress</a>]]

not_ready_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/endpoints_v1#not_ready_address DataKubernetesEndpointsV1#not_ready_address}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset.property.port"></a>

```python
port: typing.Union[IResolvable, typing.List[DataKubernetesEndpointsV1SubsetPort]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort">DataKubernetesEndpointsV1SubsetPort</a>]]

port block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/endpoints_v1#port DataKubernetesEndpointsV1#port}

---

### DataKubernetesEndpointsV1SubsetAddress <a name="DataKubernetesEndpointsV1SubsetAddress" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_endpoints_v1

dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress(
  ip: str,
  hostname: str = None,
  node_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress.property.ip">ip</a></code> | <code>str</code> | The IP of this endpoint. May not be loopback (127.0.0.0/8), link-local (169.254.0.0/16), or link-local multicast ((224.0.0.0/24). |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress.property.hostname">hostname</a></code> | <code>str</code> | The Hostname of this endpoint. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress.property.nodeName">node_name</a></code> | <code>str</code> | Node hosting this endpoint. This can be used to determine endpoints local to a node. |

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress.property.ip"></a>

```python
ip: str
```

- *Type:* str

The IP of this endpoint. May not be loopback (127.0.0.0/8), link-local (169.254.0.0/16), or link-local multicast ((224.0.0.0/24).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/endpoints_v1#ip DataKubernetesEndpointsV1#ip}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

The Hostname of this endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/endpoints_v1#hostname DataKubernetesEndpointsV1#hostname}

---

##### `node_name`<sup>Optional</sup> <a name="node_name" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress.property.nodeName"></a>

```python
node_name: str
```

- *Type:* str

Node hosting this endpoint. This can be used to determine endpoints local to a node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/endpoints_v1#node_name DataKubernetesEndpointsV1#node_name}

---

### DataKubernetesEndpointsV1SubsetNotReadyAddress <a name="DataKubernetesEndpointsV1SubsetNotReadyAddress" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_endpoints_v1

dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress(
  ip: str,
  hostname: str = None,
  node_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress.property.ip">ip</a></code> | <code>str</code> | The IP of this endpoint. May not be loopback (127.0.0.0/8), link-local (169.254.0.0/16), or link-local multicast ((224.0.0.0/24). |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress.property.hostname">hostname</a></code> | <code>str</code> | The Hostname of this endpoint. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress.property.nodeName">node_name</a></code> | <code>str</code> | Node hosting this endpoint. This can be used to determine endpoints local to a node. |

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress.property.ip"></a>

```python
ip: str
```

- *Type:* str

The IP of this endpoint. May not be loopback (127.0.0.0/8), link-local (169.254.0.0/16), or link-local multicast ((224.0.0.0/24).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/endpoints_v1#ip DataKubernetesEndpointsV1#ip}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

The Hostname of this endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/endpoints_v1#hostname DataKubernetesEndpointsV1#hostname}

---

##### `node_name`<sup>Optional</sup> <a name="node_name" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress.property.nodeName"></a>

```python
node_name: str
```

- *Type:* str

Node hosting this endpoint. This can be used to determine endpoints local to a node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/endpoints_v1#node_name DataKubernetesEndpointsV1#node_name}

---

### DataKubernetesEndpointsV1SubsetPort <a name="DataKubernetesEndpointsV1SubsetPort" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_endpoints_v1

dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort(
  port: typing.Union[int, float],
  name: str = None,
  protocol: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The port that will be exposed by this endpoint. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort.property.name">name</a></code> | <code>str</code> | The name of this port within the endpoint. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort.property.protocol">protocol</a></code> | <code>str</code> | The IP protocol for this port. Supports `TCP` and `UDP`. Default is `TCP`. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port that will be exposed by this endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/endpoints_v1#port DataKubernetesEndpointsV1#port}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort.property.name"></a>

```python
name: str
```

- *Type:* str

The name of this port within the endpoint.

Must be a DNS_LABEL. Optional if only one Port is defined on this endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/endpoints_v1#name DataKubernetesEndpointsV1#name}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

The IP protocol for this port. Supports `TCP` and `UDP`. Default is `TCP`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/endpoints_v1#protocol DataKubernetesEndpointsV1#protocol}

---

## Classes <a name="Classes" id="Classes"></a>

### DataKubernetesEndpointsV1MetadataOutputReference <a name="DataKubernetesEndpointsV1MetadataOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_endpoints_v1

dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.resetGenerateName">reset_generate_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_generate_name` <a name="reset_generate_name" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.resetGenerateName"></a>

```python
def reset_generate_name() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.generation">generation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.resourceVersion">resource_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.generateNameInput">generate_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.generateName">generate_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata">DataKubernetesEndpointsV1Metadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.generation"></a>

```python
generation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_version`<sup>Required</sup> <a name="resource_version" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.resourceVersion"></a>

```python
resource_version: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `generate_name_input`<sup>Optional</sup> <a name="generate_name_input" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.generateNameInput"></a>

```python
generate_name_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `generate_name`<sup>Required</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.generateName"></a>

```python
generate_name: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataKubernetesEndpointsV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata">DataKubernetesEndpointsV1Metadata</a>

---


### DataKubernetesEndpointsV1SubsetAddressList <a name="DataKubernetesEndpointsV1SubsetAddressList" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_endpoints_v1

dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataKubernetesEndpointsV1SubsetAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress">DataKubernetesEndpointsV1SubsetAddress</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataKubernetesEndpointsV1SubsetAddress]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress">DataKubernetesEndpointsV1SubsetAddress</a>]]

---


### DataKubernetesEndpointsV1SubsetAddressOutputReference <a name="DataKubernetesEndpointsV1SubsetAddressOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_endpoints_v1

dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.resetHostname">reset_hostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.resetNodeName">reset_node_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hostname` <a name="reset_hostname" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.resetHostname"></a>

```python
def reset_hostname() -> None
```

##### `reset_node_name` <a name="reset_node_name" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.resetNodeName"></a>

```python
def reset_node_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.ipInput">ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.nodeNameInput">node_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.nodeName">node_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress">DataKubernetesEndpointsV1SubsetAddress</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `ip_input`<sup>Optional</sup> <a name="ip_input" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.ipInput"></a>

```python
ip_input: str
```

- *Type:* str

---

##### `node_name_input`<sup>Optional</sup> <a name="node_name_input" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.nodeNameInput"></a>

```python
node_name_input: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `node_name`<sup>Required</sup> <a name="node_name" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.nodeName"></a>

```python
node_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataKubernetesEndpointsV1SubsetAddress]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress">DataKubernetesEndpointsV1SubsetAddress</a>]

---


### DataKubernetesEndpointsV1SubsetList <a name="DataKubernetesEndpointsV1SubsetList" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_endpoints_v1

dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataKubernetesEndpointsV1SubsetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset">DataKubernetesEndpointsV1Subset</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataKubernetesEndpointsV1Subset]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset">DataKubernetesEndpointsV1Subset</a>]]

---


### DataKubernetesEndpointsV1SubsetNotReadyAddressList <a name="DataKubernetesEndpointsV1SubsetNotReadyAddressList" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_endpoints_v1

dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress">DataKubernetesEndpointsV1SubsetNotReadyAddress</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataKubernetesEndpointsV1SubsetNotReadyAddress]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress">DataKubernetesEndpointsV1SubsetNotReadyAddress</a>]]

---


### DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference <a name="DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_endpoints_v1

dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.resetHostname">reset_hostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.resetNodeName">reset_node_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hostname` <a name="reset_hostname" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.resetHostname"></a>

```python
def reset_hostname() -> None
```

##### `reset_node_name` <a name="reset_node_name" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.resetNodeName"></a>

```python
def reset_node_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.ipInput">ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.nodeNameInput">node_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.nodeName">node_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress">DataKubernetesEndpointsV1SubsetNotReadyAddress</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `ip_input`<sup>Optional</sup> <a name="ip_input" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.ipInput"></a>

```python
ip_input: str
```

- *Type:* str

---

##### `node_name_input`<sup>Optional</sup> <a name="node_name_input" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.nodeNameInput"></a>

```python
node_name_input: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `node_name`<sup>Required</sup> <a name="node_name" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.nodeName"></a>

```python
node_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataKubernetesEndpointsV1SubsetNotReadyAddress]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress">DataKubernetesEndpointsV1SubsetNotReadyAddress</a>]

---


### DataKubernetesEndpointsV1SubsetOutputReference <a name="DataKubernetesEndpointsV1SubsetOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_endpoints_v1

dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.putAddress">put_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.putNotReadyAddress">put_not_ready_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.putPort">put_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.resetAddress">reset_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.resetNotReadyAddress">reset_not_ready_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.resetPort">reset_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_address` <a name="put_address" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.putAddress"></a>

```python
def put_address(
  value: typing.Union[IResolvable, typing.List[DataKubernetesEndpointsV1SubsetAddress]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.putAddress.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress">DataKubernetesEndpointsV1SubsetAddress</a>]]

---

##### `put_not_ready_address` <a name="put_not_ready_address" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.putNotReadyAddress"></a>

```python
def put_not_ready_address(
  value: typing.Union[IResolvable, typing.List[DataKubernetesEndpointsV1SubsetNotReadyAddress]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.putNotReadyAddress.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress">DataKubernetesEndpointsV1SubsetNotReadyAddress</a>]]

---

##### `put_port` <a name="put_port" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.putPort"></a>

```python
def put_port(
  value: typing.Union[IResolvable, typing.List[DataKubernetesEndpointsV1SubsetPort]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.putPort.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort">DataKubernetesEndpointsV1SubsetPort</a>]]

---

##### `reset_address` <a name="reset_address" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.resetAddress"></a>

```python
def reset_address() -> None
```

##### `reset_not_ready_address` <a name="reset_not_ready_address" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.resetNotReadyAddress"></a>

```python
def reset_not_ready_address() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.resetPort"></a>

```python
def reset_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.address">address</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList">DataKubernetesEndpointsV1SubsetAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.notReadyAddress">not_ready_address</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList">DataKubernetesEndpointsV1SubsetNotReadyAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.port">port</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList">DataKubernetesEndpointsV1SubsetPortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.addressInput">address_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress">DataKubernetesEndpointsV1SubsetAddress</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.notReadyAddressInput">not_ready_address_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress">DataKubernetesEndpointsV1SubsetNotReadyAddress</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort">DataKubernetesEndpointsV1SubsetPort</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset">DataKubernetesEndpointsV1Subset</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.address"></a>

```python
address: DataKubernetesEndpointsV1SubsetAddressList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList">DataKubernetesEndpointsV1SubsetAddressList</a>

---

##### `not_ready_address`<sup>Required</sup> <a name="not_ready_address" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.notReadyAddress"></a>

```python
not_ready_address: DataKubernetesEndpointsV1SubsetNotReadyAddressList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList">DataKubernetesEndpointsV1SubsetNotReadyAddressList</a>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.port"></a>

```python
port: DataKubernetesEndpointsV1SubsetPortList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList">DataKubernetesEndpointsV1SubsetPortList</a>

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.addressInput"></a>

```python
address_input: typing.Union[IResolvable, typing.List[DataKubernetesEndpointsV1SubsetAddress]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress">DataKubernetesEndpointsV1SubsetAddress</a>]]

---

##### `not_ready_address_input`<sup>Optional</sup> <a name="not_ready_address_input" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.notReadyAddressInput"></a>

```python
not_ready_address_input: typing.Union[IResolvable, typing.List[DataKubernetesEndpointsV1SubsetNotReadyAddress]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress">DataKubernetesEndpointsV1SubsetNotReadyAddress</a>]]

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.portInput"></a>

```python
port_input: typing.Union[IResolvable, typing.List[DataKubernetesEndpointsV1SubsetPort]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort">DataKubernetesEndpointsV1SubsetPort</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataKubernetesEndpointsV1Subset]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset">DataKubernetesEndpointsV1Subset</a>]

---


### DataKubernetesEndpointsV1SubsetPortList <a name="DataKubernetesEndpointsV1SubsetPortList" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_endpoints_v1

dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataKubernetesEndpointsV1SubsetPortOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort">DataKubernetesEndpointsV1SubsetPort</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataKubernetesEndpointsV1SubsetPort]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort">DataKubernetesEndpointsV1SubsetPort</a>]]

---


### DataKubernetesEndpointsV1SubsetPortOutputReference <a name="DataKubernetesEndpointsV1SubsetPortOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_endpoints_v1

dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort">DataKubernetesEndpointsV1SubsetPort</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataKubernetesEndpointsV1SubsetPort]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort">DataKubernetesEndpointsV1SubsetPort</a>]

---



