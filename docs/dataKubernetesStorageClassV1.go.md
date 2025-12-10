# `dataKubernetesStorageClassV1` Submodule <a name="`dataKubernetesStorageClassV1` Submodule" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataKubernetesStorageClassV1 <a name="DataKubernetesStorageClassV1" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/storage_class_v1 kubernetes_storage_class_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/datakubernetesstorageclassv1"

datakubernetesstorageclassv1.NewDataKubernetesStorageClassV1(scope Construct, id *string, config DataKubernetesStorageClassV1Config) DataKubernetesStorageClassV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config">DataKubernetesStorageClassV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config">DataKubernetesStorageClassV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.putAllowedTopologies">PutAllowedTopologies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetAllowedTopologies">ResetAllowedTopologies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetAllowVolumeExpansion">ResetAllowVolumeExpansion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetMountOptions">ResetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetReclaimPolicy">ResetReclaimPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetVolumeBindingMode">ResetVolumeBindingMode</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAllowedTopologies` <a name="PutAllowedTopologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.putAllowedTopologies"></a>

```go
func PutAllowedTopologies(value DataKubernetesStorageClassV1AllowedTopologies)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.putAllowedTopologies.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies">DataKubernetesStorageClassV1AllowedTopologies</a>

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.putMetadata"></a>

```go
func PutMetadata(value DataKubernetesStorageClassV1Metadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata">DataKubernetesStorageClassV1Metadata</a>

---

##### `ResetAllowedTopologies` <a name="ResetAllowedTopologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetAllowedTopologies"></a>

```go
func ResetAllowedTopologies()
```

##### `ResetAllowVolumeExpansion` <a name="ResetAllowVolumeExpansion" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetAllowVolumeExpansion"></a>

```go
func ResetAllowVolumeExpansion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetId"></a>

```go
func ResetId()
```

##### `ResetMountOptions` <a name="ResetMountOptions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetMountOptions"></a>

```go
func ResetMountOptions()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetReclaimPolicy` <a name="ResetReclaimPolicy" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetReclaimPolicy"></a>

```go
func ResetReclaimPolicy()
```

##### `ResetVolumeBindingMode` <a name="ResetVolumeBindingMode" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetVolumeBindingMode"></a>

```go
func ResetVolumeBindingMode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataKubernetesStorageClassV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/datakubernetesstorageclassv1"

datakubernetesstorageclassv1.DataKubernetesStorageClassV1_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/datakubernetesstorageclassv1"

datakubernetesstorageclassv1.DataKubernetesStorageClassV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/datakubernetesstorageclassv1"

datakubernetesstorageclassv1.DataKubernetesStorageClassV1_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/datakubernetesstorageclassv1"

datakubernetesstorageclassv1.DataKubernetesStorageClassV1_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataKubernetesStorageClassV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataKubernetesStorageClassV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataKubernetesStorageClassV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/storage_class_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataKubernetesStorageClassV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.allowedTopologies">AllowedTopologies</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference">DataKubernetesStorageClassV1AllowedTopologiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference">DataKubernetesStorageClassV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.storageProvisioner">StorageProvisioner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.allowedTopologiesInput">AllowedTopologiesInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies">DataKubernetesStorageClassV1AllowedTopologies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.allowVolumeExpansionInput">AllowVolumeExpansionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata">DataKubernetesStorageClassV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.mountOptionsInput">MountOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.reclaimPolicyInput">ReclaimPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.volumeBindingModeInput">VolumeBindingModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.allowVolumeExpansion">AllowVolumeExpansion</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.mountOptions">MountOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.reclaimPolicy">ReclaimPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.volumeBindingMode">VolumeBindingMode</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AllowedTopologies`<sup>Required</sup> <a name="AllowedTopologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.allowedTopologies"></a>

```go
func AllowedTopologies() DataKubernetesStorageClassV1AllowedTopologiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference">DataKubernetesStorageClassV1AllowedTopologiesOutputReference</a>

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.metadata"></a>

```go
func Metadata() DataKubernetesStorageClassV1MetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference">DataKubernetesStorageClassV1MetadataOutputReference</a>

---

##### `StorageProvisioner`<sup>Required</sup> <a name="StorageProvisioner" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.storageProvisioner"></a>

```go
func StorageProvisioner() *string
```

- *Type:* *string

---

##### `AllowedTopologiesInput`<sup>Optional</sup> <a name="AllowedTopologiesInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.allowedTopologiesInput"></a>

```go
func AllowedTopologiesInput() DataKubernetesStorageClassV1AllowedTopologies
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies">DataKubernetesStorageClassV1AllowedTopologies</a>

---

##### `AllowVolumeExpansionInput`<sup>Optional</sup> <a name="AllowVolumeExpansionInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.allowVolumeExpansionInput"></a>

```go
func AllowVolumeExpansionInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.metadataInput"></a>

```go
func MetadataInput() DataKubernetesStorageClassV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata">DataKubernetesStorageClassV1Metadata</a>

---

##### `MountOptionsInput`<sup>Optional</sup> <a name="MountOptionsInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.mountOptionsInput"></a>

```go
func MountOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ReclaimPolicyInput`<sup>Optional</sup> <a name="ReclaimPolicyInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.reclaimPolicyInput"></a>

```go
func ReclaimPolicyInput() *string
```

- *Type:* *string

---

##### `VolumeBindingModeInput`<sup>Optional</sup> <a name="VolumeBindingModeInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.volumeBindingModeInput"></a>

```go
func VolumeBindingModeInput() *string
```

- *Type:* *string

---

##### `AllowVolumeExpansion`<sup>Required</sup> <a name="AllowVolumeExpansion" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.allowVolumeExpansion"></a>

```go
func AllowVolumeExpansion() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MountOptions`<sup>Required</sup> <a name="MountOptions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.mountOptions"></a>

```go
func MountOptions() *[]*string
```

- *Type:* *[]*string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ReclaimPolicy`<sup>Required</sup> <a name="ReclaimPolicy" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.reclaimPolicy"></a>

```go
func ReclaimPolicy() *string
```

- *Type:* *string

---

##### `VolumeBindingMode`<sup>Required</sup> <a name="VolumeBindingMode" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.volumeBindingMode"></a>

```go
func VolumeBindingMode() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataKubernetesStorageClassV1AllowedTopologies <a name="DataKubernetesStorageClassV1AllowedTopologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/datakubernetesstorageclassv1"

&datakubernetesstorageclassv1.DataKubernetesStorageClassV1AllowedTopologies {
	MatchLabelExpressions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies.property.matchLabelExpressions">MatchLabelExpressions</a></code> | <code>interface{}</code> | match_label_expressions block. |

---

##### `MatchLabelExpressions`<sup>Optional</sup> <a name="MatchLabelExpressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies.property.matchLabelExpressions"></a>

```go
MatchLabelExpressions interface{}
```

- *Type:* interface{}

match_label_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/storage_class_v1#match_label_expressions DataKubernetesStorageClassV1#match_label_expressions}

---

### DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions <a name="DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/datakubernetesstorageclassv1"

&datakubernetesstorageclassv1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions {
	Key: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions.property.key">Key</a></code> | <code>*string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions.property.values">Values</a></code> | <code>*[]*string</code> | An array of string values. One value must match the label to be selected. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions.property.key"></a>

```go
Key *string
```

- *Type:* *string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/storage_class_v1#key DataKubernetesStorageClassV1#key}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

An array of string values. One value must match the label to be selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/storage_class_v1#values DataKubernetesStorageClassV1#values}

---

### DataKubernetesStorageClassV1Config <a name="DataKubernetesStorageClassV1Config" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/datakubernetesstorageclassv1"

&datakubernetesstorageclassv1.DataKubernetesStorageClassV1Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Metadata: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata,
	AllowedTopologies: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies,
	AllowVolumeExpansion: interface{},
	Id: *string,
	MountOptions: *[]*string,
	Parameters: *map[string]*string,
	ReclaimPolicy: *string,
	VolumeBindingMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata">DataKubernetesStorageClassV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.allowedTopologies">AllowedTopologies</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies">DataKubernetesStorageClassV1AllowedTopologies</a></code> | allowed_topologies block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.allowVolumeExpansion">AllowVolumeExpansion</a></code> | <code>interface{}</code> | Indicates whether the storage class allow volume expand. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/storage_class_v1#id DataKubernetesStorageClassV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.mountOptions">MountOptions</a></code> | <code>*[]*string</code> | Persistent Volumes that are dynamically created by a storage class will have the mount options specified. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | The parameters for the provisioner that should create volumes of this storage class. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.reclaimPolicy">ReclaimPolicy</a></code> | <code>*string</code> | Indicates the type of the reclaim policy. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.volumeBindingMode">VolumeBindingMode</a></code> | <code>*string</code> | Indicates when volume binding and dynamic provisioning should occur. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.metadata"></a>

```go
Metadata DataKubernetesStorageClassV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata">DataKubernetesStorageClassV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/storage_class_v1#metadata DataKubernetesStorageClassV1#metadata}

---

##### `AllowedTopologies`<sup>Optional</sup> <a name="AllowedTopologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.allowedTopologies"></a>

```go
AllowedTopologies DataKubernetesStorageClassV1AllowedTopologies
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies">DataKubernetesStorageClassV1AllowedTopologies</a>

allowed_topologies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/storage_class_v1#allowed_topologies DataKubernetesStorageClassV1#allowed_topologies}

---

##### `AllowVolumeExpansion`<sup>Optional</sup> <a name="AllowVolumeExpansion" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.allowVolumeExpansion"></a>

```go
AllowVolumeExpansion interface{}
```

- *Type:* interface{}

Indicates whether the storage class allow volume expand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/storage_class_v1#allow_volume_expansion DataKubernetesStorageClassV1#allow_volume_expansion}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/storage_class_v1#id DataKubernetesStorageClassV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MountOptions`<sup>Optional</sup> <a name="MountOptions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.mountOptions"></a>

```go
MountOptions *[]*string
```

- *Type:* *[]*string

Persistent Volumes that are dynamically created by a storage class will have the mount options specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/storage_class_v1#mount_options DataKubernetesStorageClassV1#mount_options}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

The parameters for the provisioner that should create volumes of this storage class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/storage_class_v1#parameters DataKubernetesStorageClassV1#parameters}

---

##### `ReclaimPolicy`<sup>Optional</sup> <a name="ReclaimPolicy" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.reclaimPolicy"></a>

```go
ReclaimPolicy *string
```

- *Type:* *string

Indicates the type of the reclaim policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/storage_class_v1#reclaim_policy DataKubernetesStorageClassV1#reclaim_policy}

---

##### `VolumeBindingMode`<sup>Optional</sup> <a name="VolumeBindingMode" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.volumeBindingMode"></a>

```go
VolumeBindingMode *string
```

- *Type:* *string

Indicates when volume binding and dynamic provisioning should occur.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/storage_class_v1#volume_binding_mode DataKubernetesStorageClassV1#volume_binding_mode}

---

### DataKubernetesStorageClassV1Metadata <a name="DataKubernetesStorageClassV1Metadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/datakubernetesstorageclassv1"

&datakubernetesstorageclassv1.DataKubernetesStorageClassV1Metadata {
	Annotations: *map[string]*string,
	Labels: *map[string]*string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | An unstructured key value map stored with the storage class that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the storage class. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata.property.name">Name</a></code> | <code>*string</code> | Name of the storage class, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

An unstructured key value map stored with the storage class that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/storage_class_v1#annotations DataKubernetesStorageClassV1#annotations}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Map of string keys and values that can be used to organize and categorize (scope and select) the storage class.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/storage_class_v1#labels DataKubernetesStorageClassV1#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the storage class, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/storage_class_v1#name DataKubernetesStorageClassV1#name}

---

## Classes <a name="Classes" id="Classes"></a>

### DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList <a name="DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/datakubernetesstorageclassv1"

datakubernetesstorageclassv1.NewDataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.get"></a>

```go
func Get(index *f64) DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference <a name="DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/datakubernetesstorageclassv1"

datakubernetesstorageclassv1.NewDataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataKubernetesStorageClassV1AllowedTopologiesOutputReference <a name="DataKubernetesStorageClassV1AllowedTopologiesOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/datakubernetesstorageclassv1"

datakubernetesstorageclassv1.NewDataKubernetesStorageClassV1AllowedTopologiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataKubernetesStorageClassV1AllowedTopologiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.putMatchLabelExpressions">PutMatchLabelExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.resetMatchLabelExpressions">ResetMatchLabelExpressions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchLabelExpressions` <a name="PutMatchLabelExpressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.putMatchLabelExpressions"></a>

```go
func PutMatchLabelExpressions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.putMatchLabelExpressions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMatchLabelExpressions` <a name="ResetMatchLabelExpressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.resetMatchLabelExpressions"></a>

```go
func ResetMatchLabelExpressions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.property.matchLabelExpressions">MatchLabelExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList">DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.property.matchLabelExpressionsInput">MatchLabelExpressionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies">DataKubernetesStorageClassV1AllowedTopologies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchLabelExpressions`<sup>Required</sup> <a name="MatchLabelExpressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.property.matchLabelExpressions"></a>

```go
func MatchLabelExpressions() DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList">DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList</a>

---

##### `MatchLabelExpressionsInput`<sup>Optional</sup> <a name="MatchLabelExpressionsInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.property.matchLabelExpressionsInput"></a>

```go
func MatchLabelExpressionsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataKubernetesStorageClassV1AllowedTopologies
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies">DataKubernetesStorageClassV1AllowedTopologies</a>

---


### DataKubernetesStorageClassV1MetadataOutputReference <a name="DataKubernetesStorageClassV1MetadataOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/datakubernetesstorageclassv1"

datakubernetesstorageclassv1.NewDataKubernetesStorageClassV1MetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataKubernetesStorageClassV1MetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.generation">Generation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata">DataKubernetesStorageClassV1Metadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.generation"></a>

```go
func Generation() *f64
```

- *Type:* *f64

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.resourceVersion"></a>

```go
func ResourceVersion() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataKubernetesStorageClassV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata">DataKubernetesStorageClassV1Metadata</a>

---



