# `validatingWebhookConfiguration` Submodule <a name="`validatingWebhookConfiguration` Submodule" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ValidatingWebhookConfiguration <a name="ValidatingWebhookConfiguration" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration kubernetes_validating_webhook_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ValidatingWebhookConfiguration(Construct Scope, string Id, ValidatingWebhookConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig">ValidatingWebhookConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig">ValidatingWebhookConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.putWebhook">PutWebhook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.putMetadata"></a>

```csharp
private void PutMetadata(ValidatingWebhookConfigurationMetadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata">ValidatingWebhookConfigurationMetadata</a>

---

##### `PutWebhook` <a name="PutWebhook" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.putWebhook"></a>

```csharp
private void PutWebhook(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.putWebhook.parameter.value"></a>

- *Type:* object

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ValidatingWebhookConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

ValidatingWebhookConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

ValidatingWebhookConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

ValidatingWebhookConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

ValidatingWebhookConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ValidatingWebhookConfiguration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ValidatingWebhookConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ValidatingWebhookConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ValidatingWebhookConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference">ValidatingWebhookConfigurationMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.webhook">Webhook</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList">ValidatingWebhookConfigurationWebhookList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata">ValidatingWebhookConfigurationMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.webhookInput">WebhookInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.metadata"></a>

```csharp
public ValidatingWebhookConfigurationMetadataOutputReference Metadata { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference">ValidatingWebhookConfigurationMetadataOutputReference</a>

---

##### `Webhook`<sup>Required</sup> <a name="Webhook" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.webhook"></a>

```csharp
public ValidatingWebhookConfigurationWebhookList Webhook { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList">ValidatingWebhookConfigurationWebhookList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.metadataInput"></a>

```csharp
public ValidatingWebhookConfigurationMetadata MetadataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata">ValidatingWebhookConfigurationMetadata</a>

---

##### `WebhookInput`<sup>Optional</sup> <a name="WebhookInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.webhookInput"></a>

```csharp
public object WebhookInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ValidatingWebhookConfigurationConfig <a name="ValidatingWebhookConfigurationConfig" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ValidatingWebhookConfigurationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    ValidatingWebhookConfigurationMetadata Metadata,
    object Webhook,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata">ValidatingWebhookConfigurationMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.webhook">Webhook</a></code> | <code>object</code> | webhook block. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#id ValidatingWebhookConfiguration#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.metadata"></a>

```csharp
public ValidatingWebhookConfigurationMetadata Metadata { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata">ValidatingWebhookConfigurationMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#metadata ValidatingWebhookConfiguration#metadata}

---

##### `Webhook`<sup>Required</sup> <a name="Webhook" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.webhook"></a>

```csharp
public object Webhook { get; set; }
```

- *Type:* object

webhook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#webhook ValidatingWebhookConfiguration#webhook}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#id ValidatingWebhookConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ValidatingWebhookConfigurationMetadata <a name="ValidatingWebhookConfigurationMetadata" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ValidatingWebhookConfigurationMetadata {
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    string GenerateName = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | An unstructured key value map stored with the validating webhook configuration that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata.property.generateName">GenerateName</a></code> | <code>string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of string keys and values that can be used to organize and categorize (scope and select) the validating webhook configuration. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata.property.name">Name</a></code> | <code>string</code> | Name of the validating webhook configuration, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

An unstructured key value map stored with the validating webhook configuration that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#annotations ValidatingWebhookConfiguration#annotations}

---

##### `GenerateName`<sup>Optional</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata.property.generateName"></a>

```csharp
public string GenerateName { get; set; }
```

- *Type:* string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#generate_name ValidatingWebhookConfiguration#generate_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of string keys and values that can be used to organize and categorize (scope and select) the validating webhook configuration.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#labels ValidatingWebhookConfiguration#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the validating webhook configuration, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#name ValidatingWebhookConfiguration#name}

---

### ValidatingWebhookConfigurationWebhook <a name="ValidatingWebhookConfigurationWebhook" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ValidatingWebhookConfigurationWebhook {
    ValidatingWebhookConfigurationWebhookClientConfig ClientConfig,
    string Name,
    string[] AdmissionReviewVersions = null,
    string FailurePolicy = null,
    string MatchPolicy = null,
    ValidatingWebhookConfigurationWebhookNamespaceSelector NamespaceSelector = null,
    ValidatingWebhookConfigurationWebhookObjectSelector ObjectSelector = null,
    object Rule = null,
    string SideEffects = null,
    double TimeoutSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.clientConfig">ClientConfig</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig">ValidatingWebhookConfigurationWebhookClientConfig</a></code> | client_config block. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.name">Name</a></code> | <code>string</code> | The name of the admission webhook. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.admissionReviewVersions">AdmissionReviewVersions</a></code> | <code>string[]</code> | AdmissionReviewVersions is an ordered list of preferred `AdmissionReview` versions the Webhook expects. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.failurePolicy">FailurePolicy</a></code> | <code>string</code> | FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.matchPolicy">MatchPolicy</a></code> | <code>string</code> | matchPolicy defines how the "rules" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent". |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.namespaceSelector">NamespaceSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelector">ValidatingWebhookConfigurationWebhookNamespaceSelector</a></code> | namespace_selector block. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.objectSelector">ObjectSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelector">ValidatingWebhookConfigurationWebhookObjectSelector</a></code> | object_selector block. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.rule">Rule</a></code> | <code>object</code> | rule block. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.sideEffects">SideEffects</a></code> | <code>string</code> | SideEffects states whether this webhook has side effects. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | TimeoutSeconds specifies the timeout for this webhook. |

---

##### `ClientConfig`<sup>Required</sup> <a name="ClientConfig" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.clientConfig"></a>

```csharp
public ValidatingWebhookConfigurationWebhookClientConfig ClientConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig">ValidatingWebhookConfigurationWebhookClientConfig</a>

client_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#client_config ValidatingWebhookConfiguration#client_config}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the admission webhook.

Name should be fully qualified, e.g., imagepolicy.kubernetes.io, where "imagepolicy" is the name of the webhook, and kubernetes.io is the name of the organization. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#name ValidatingWebhookConfiguration#name}

---

##### `AdmissionReviewVersions`<sup>Optional</sup> <a name="AdmissionReviewVersions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.admissionReviewVersions"></a>

```csharp
public string[] AdmissionReviewVersions { get; set; }
```

- *Type:* string[]

AdmissionReviewVersions is an ordered list of preferred `AdmissionReview` versions the Webhook expects.

API server will try to use first version in the list which it supports. If none of the versions specified in this list supported by API server, validation will fail for this object. If a persisted webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail and be subject to the failure policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#admission_review_versions ValidatingWebhookConfiguration#admission_review_versions}

---

##### `FailurePolicy`<sup>Optional</sup> <a name="FailurePolicy" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.failurePolicy"></a>

```csharp
public string FailurePolicy { get; set; }
```

- *Type:* string

FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail.

Defaults to Fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#failure_policy ValidatingWebhookConfiguration#failure_policy}

---

##### `MatchPolicy`<sup>Optional</sup> <a name="MatchPolicy" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.matchPolicy"></a>

```csharp
public string MatchPolicy { get; set; }
```

- *Type:* string

matchPolicy defines how the "rules" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".

* Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the webhook.
* Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the webhook.

Defaults to "Equivalent"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#match_policy ValidatingWebhookConfiguration#match_policy}

---

##### `NamespaceSelector`<sup>Optional</sup> <a name="NamespaceSelector" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.namespaceSelector"></a>

```csharp
public ValidatingWebhookConfigurationWebhookNamespaceSelector NamespaceSelector { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelector">ValidatingWebhookConfigurationWebhookNamespaceSelector</a>

namespace_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#namespace_selector ValidatingWebhookConfiguration#namespace_selector}

---

##### `ObjectSelector`<sup>Optional</sup> <a name="ObjectSelector" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.objectSelector"></a>

```csharp
public ValidatingWebhookConfigurationWebhookObjectSelector ObjectSelector { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelector">ValidatingWebhookConfigurationWebhookObjectSelector</a>

object_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#object_selector ValidatingWebhookConfiguration#object_selector}

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.rule"></a>

```csharp
public object Rule { get; set; }
```

- *Type:* object

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#rule ValidatingWebhookConfiguration#rule}

---

##### `SideEffects`<sup>Optional</sup> <a name="SideEffects" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.sideEffects"></a>

```csharp
public string SideEffects { get; set; }
```

- *Type:* string

SideEffects states whether this webhook has side effects.

Acceptable values are: None, NoneOnDryRun (webhooks created via v1beta1 may also specify Some or Unknown). Webhooks with side effects MUST implement a reconciliation system, since a request may be rejected by a future step in the admission chain and the side effects therefore need to be undone. Requests with the dryRun attribute will be auto-rejected if they match a webhook with sideEffects == Unknown or Some.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#side_effects ValidatingWebhookConfiguration#side_effects}

---

##### `TimeoutSeconds`<sup>Optional</sup> <a name="TimeoutSeconds" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; set; }
```

- *Type:* double

TimeoutSeconds specifies the timeout for this webhook.

After the timeout passes, the webhook call will be ignored or the API call will fail based on the failure policy. The timeout value must be between 1 and 30 seconds. Default to 10 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#timeout_seconds ValidatingWebhookConfiguration#timeout_seconds}

---

### ValidatingWebhookConfigurationWebhookClientConfig <a name="ValidatingWebhookConfigurationWebhookClientConfig" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ValidatingWebhookConfigurationWebhookClientConfig {
    string CaBundle = null,
    ValidatingWebhookConfigurationWebhookClientConfigService Service = null,
    string Url = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig.property.caBundle">CaBundle</a></code> | <code>string</code> | `caBundle` is a PEM encoded CA bundle which will be used to validate the webhook's server certificate. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig.property.service">Service</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService">ValidatingWebhookConfigurationWebhookClientConfigService</a></code> | service block. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig.property.url">Url</a></code> | <code>string</code> | `url` gives the location of the webhook, in standard URL form (`scheme://host:port/path`). |

---

##### `CaBundle`<sup>Optional</sup> <a name="CaBundle" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig.property.caBundle"></a>

```csharp
public string CaBundle { get; set; }
```

- *Type:* string

`caBundle` is a PEM encoded CA bundle which will be used to validate the webhook's server certificate.

If unspecified, system trust roots on the apiserver are used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#ca_bundle ValidatingWebhookConfiguration#ca_bundle}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig.property.service"></a>

```csharp
public ValidatingWebhookConfigurationWebhookClientConfigService Service { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService">ValidatingWebhookConfigurationWebhookClientConfigService</a>

service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#service ValidatingWebhookConfiguration#service}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

`url` gives the location of the webhook, in standard URL form (`scheme://host:port/path`).

Exactly one of `url` or `service` must be specified.

The `host` should not refer to a service running in the cluster; use the `service` field instead. The host might be resolved via external DNS in some apiservers (e.g., `kube-apiserver` cannot resolve in-cluster DNS as that would be a layering violation). `host` may also be an IP address.

Please note that using `localhost` or `127.0.0.1` as a `host` is risky unless you take great care to run this webhook on all hosts which run an apiserver which might need to make calls to this webhook. Such installs are likely to be non-portable, i.e., not easy to turn up in a new cluster.

The scheme must be "https"; the URL must begin with "https://".

A path is optional, and if present may be any string permissible in a URL. You may use the path to pass an arbitrary string to the webhook, for example, a cluster identifier.

Attempting to use a user or basic auth e.g. "user:password@" is not allowed. Fragments ("#...") and query parameters ("?...") are not allowed, either.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#url ValidatingWebhookConfiguration#url}

---

### ValidatingWebhookConfigurationWebhookClientConfigService <a name="ValidatingWebhookConfigurationWebhookClientConfigService" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ValidatingWebhookConfigurationWebhookClientConfigService {
    string Name,
    string Namespace,
    string Path = null,
    double Port = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService.property.name">Name</a></code> | <code>string</code> | `name` is the name of the service. Required. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService.property.namespace">Namespace</a></code> | <code>string</code> | `namespace` is the namespace of the service. Required. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService.property.path">Path</a></code> | <code>string</code> | `path` is an optional URL path which will be sent in any request to this service. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService.property.port">Port</a></code> | <code>double</code> | If specified, the port on the service that hosting webhook. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

`name` is the name of the service. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#name ValidatingWebhookConfiguration#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

`namespace` is the namespace of the service. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#namespace ValidatingWebhookConfiguration#namespace}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

`path` is an optional URL path which will be sent in any request to this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#path ValidatingWebhookConfiguration#path}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

If specified, the port on the service that hosting webhook.

Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#port ValidatingWebhookConfiguration#port}

---

### ValidatingWebhookConfigurationWebhookNamespaceSelector <a name="ValidatingWebhookConfigurationWebhookNamespaceSelector" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ValidatingWebhookConfigurationWebhookNamespaceSelector {
    object MatchExpressions = null,
    System.Collections.Generic.IDictionary<string, string> MatchLabels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelector.property.matchExpressions">MatchExpressions</a></code> | <code>object</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelector.property.matchLabels">MatchLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of {key,value} pairs. |

---

##### `MatchExpressions`<sup>Optional</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelector.property.matchExpressions"></a>

```csharp
public object MatchExpressions { get; set; }
```

- *Type:* object

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#match_expressions ValidatingWebhookConfiguration#match_expressions}

---

##### `MatchLabels`<sup>Optional</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelector.property.matchLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#match_labels ValidatingWebhookConfiguration#match_labels}

---

### ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions <a name="ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions {
    string Key = null,
    string Operator = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.property.key">Key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.property.operator">Operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.property.values">Values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#key ValidatingWebhookConfiguration#key}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#operator ValidatingWebhookConfiguration#operator}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#values ValidatingWebhookConfiguration#values}

---

### ValidatingWebhookConfigurationWebhookObjectSelector <a name="ValidatingWebhookConfigurationWebhookObjectSelector" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ValidatingWebhookConfigurationWebhookObjectSelector {
    object MatchExpressions = null,
    System.Collections.Generic.IDictionary<string, string> MatchLabels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelector.property.matchExpressions">MatchExpressions</a></code> | <code>object</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelector.property.matchLabels">MatchLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of {key,value} pairs. |

---

##### `MatchExpressions`<sup>Optional</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelector.property.matchExpressions"></a>

```csharp
public object MatchExpressions { get; set; }
```

- *Type:* object

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#match_expressions ValidatingWebhookConfiguration#match_expressions}

---

##### `MatchLabels`<sup>Optional</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelector.property.matchLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#match_labels ValidatingWebhookConfiguration#match_labels}

---

### ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions <a name="ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions {
    string Key = null,
    string Operator = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.property.key">Key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.property.operator">Operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.property.values">Values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#key ValidatingWebhookConfiguration#key}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#operator ValidatingWebhookConfiguration#operator}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#values ValidatingWebhookConfiguration#values}

---

### ValidatingWebhookConfigurationWebhookRule <a name="ValidatingWebhookConfigurationWebhookRule" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ValidatingWebhookConfigurationWebhookRule {
    string[] ApiGroups,
    string[] ApiVersions,
    string[] Operations,
    string[] Resources,
    string Scope = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule.property.apiGroups">ApiGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#api_groups ValidatingWebhookConfiguration#api_groups}. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule.property.apiVersions">ApiVersions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#api_versions ValidatingWebhookConfiguration#api_versions}. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule.property.operations">Operations</a></code> | <code>string[]</code> | Operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule.property.resources">Resources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#resources ValidatingWebhookConfiguration#resources}. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule.property.scope">Scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#scope ValidatingWebhookConfiguration#scope}. |

---

##### `ApiGroups`<sup>Required</sup> <a name="ApiGroups" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule.property.apiGroups"></a>

```csharp
public string[] ApiGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#api_groups ValidatingWebhookConfiguration#api_groups}.

---

##### `ApiVersions`<sup>Required</sup> <a name="ApiVersions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule.property.apiVersions"></a>

```csharp
public string[] ApiVersions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#api_versions ValidatingWebhookConfiguration#api_versions}.

---

##### `Operations`<sup>Required</sup> <a name="Operations" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule.property.operations"></a>

```csharp
public string[] Operations { get; set; }
```

- *Type:* string[]

Operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added.

If '*' is present, the length of the slice must be one. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#operations ValidatingWebhookConfiguration#operations}

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule.property.resources"></a>

```csharp
public string[] Resources { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#resources ValidatingWebhookConfiguration#resources}.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/validating_webhook_configuration#scope ValidatingWebhookConfiguration#scope}.

---

## Classes <a name="Classes" id="Classes"></a>

### ValidatingWebhookConfigurationMetadataOutputReference <a name="ValidatingWebhookConfigurationMetadataOutputReference" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ValidatingWebhookConfigurationMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.resetGenerateName">ResetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetGenerateName` <a name="ResetGenerateName" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.resetGenerateName"></a>

```csharp
private void ResetGenerateName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.generation">Generation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.generateNameInput">GenerateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.generateName">GenerateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata">ValidatingWebhookConfigurationMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.generation"></a>

```csharp
public double Generation { get; }
```

- *Type:* double

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.resourceVersion"></a>

```csharp
public string ResourceVersion { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GenerateNameInput`<sup>Optional</sup> <a name="GenerateNameInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.generateNameInput"></a>

```csharp
public string GenerateNameInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GenerateName`<sup>Required</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.generateName"></a>

```csharp
public string GenerateName { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.internalValue"></a>

```csharp
public ValidatingWebhookConfigurationMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata">ValidatingWebhookConfigurationMetadata</a>

---


### ValidatingWebhookConfigurationWebhookClientConfigOutputReference <a name="ValidatingWebhookConfigurationWebhookClientConfigOutputReference" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ValidatingWebhookConfigurationWebhookClientConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.putService">PutService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.resetCaBundle">ResetCaBundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.resetService">ResetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutService` <a name="PutService" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.putService"></a>

```csharp
private void PutService(ValidatingWebhookConfigurationWebhookClientConfigService Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.putService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService">ValidatingWebhookConfigurationWebhookClientConfigService</a>

---

##### `ResetCaBundle` <a name="ResetCaBundle" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.resetCaBundle"></a>

```csharp
private void ResetCaBundle()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.resetService"></a>

```csharp
private void ResetService()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.service">Service</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference">ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.caBundleInput">CaBundleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.serviceInput">ServiceInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService">ValidatingWebhookConfigurationWebhookClientConfigService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.caBundle">CaBundle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig">ValidatingWebhookConfigurationWebhookClientConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.service"></a>

```csharp
public ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference Service { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference">ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference</a>

---

##### `CaBundleInput`<sup>Optional</sup> <a name="CaBundleInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.caBundleInput"></a>

```csharp
public string CaBundleInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.serviceInput"></a>

```csharp
public ValidatingWebhookConfigurationWebhookClientConfigService ServiceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService">ValidatingWebhookConfigurationWebhookClientConfigService</a>

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `CaBundle`<sup>Required</sup> <a name="CaBundle" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.caBundle"></a>

```csharp
public string CaBundle { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.internalValue"></a>

```csharp
public ValidatingWebhookConfigurationWebhookClientConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig">ValidatingWebhookConfigurationWebhookClientConfig</a>

---


### ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference <a name="ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService">ValidatingWebhookConfigurationWebhookClientConfigService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.internalValue"></a>

```csharp
public ValidatingWebhookConfigurationWebhookClientConfigService InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService">ValidatingWebhookConfigurationWebhookClientConfigService</a>

---


### ValidatingWebhookConfigurationWebhookList <a name="ValidatingWebhookConfigurationWebhookList" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ValidatingWebhookConfigurationWebhookList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.get"></a>

```csharp
private ValidatingWebhookConfigurationWebhookOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList <a name="ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.get"></a>

```csharp
private ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference <a name="ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference <a name="ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.putMatchExpressions">PutMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resetMatchExpressions">ResetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resetMatchLabels">ResetMatchLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchExpressions` <a name="PutMatchExpressions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.putMatchExpressions"></a>

```csharp
private void PutMatchExpressions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* object

---

##### `ResetMatchExpressions` <a name="ResetMatchExpressions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resetMatchExpressions"></a>

```csharp
private void ResetMatchExpressions()
```

##### `ResetMatchLabels` <a name="ResetMatchLabels" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resetMatchLabels"></a>

```csharp
private void ResetMatchLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchExpressions">MatchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList">ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchExpressionsInput">MatchExpressionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchLabelsInput">MatchLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchLabels">MatchLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelector">ValidatingWebhookConfigurationWebhookNamespaceSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MatchExpressions`<sup>Required</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchExpressions"></a>

```csharp
public ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList MatchExpressions { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList">ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList</a>

---

##### `MatchExpressionsInput`<sup>Optional</sup> <a name="MatchExpressionsInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchExpressionsInput"></a>

```csharp
public object MatchExpressionsInput { get; }
```

- *Type:* object

---

##### `MatchLabelsInput`<sup>Optional</sup> <a name="MatchLabelsInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MatchLabels`<sup>Required</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.internalValue"></a>

```csharp
public ValidatingWebhookConfigurationWebhookNamespaceSelector InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelector">ValidatingWebhookConfigurationWebhookNamespaceSelector</a>

---


### ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList <a name="ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.get"></a>

```csharp
private ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference <a name="ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference <a name="ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.putMatchExpressions">PutMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.resetMatchExpressions">ResetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.resetMatchLabels">ResetMatchLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchExpressions` <a name="PutMatchExpressions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.putMatchExpressions"></a>

```csharp
private void PutMatchExpressions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* object

---

##### `ResetMatchExpressions` <a name="ResetMatchExpressions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.resetMatchExpressions"></a>

```csharp
private void ResetMatchExpressions()
```

##### `ResetMatchLabels` <a name="ResetMatchLabels" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.resetMatchLabels"></a>

```csharp
private void ResetMatchLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchExpressions">MatchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList">ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchExpressionsInput">MatchExpressionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchLabelsInput">MatchLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchLabels">MatchLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelector">ValidatingWebhookConfigurationWebhookObjectSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MatchExpressions`<sup>Required</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchExpressions"></a>

```csharp
public ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList MatchExpressions { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList">ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList</a>

---

##### `MatchExpressionsInput`<sup>Optional</sup> <a name="MatchExpressionsInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchExpressionsInput"></a>

```csharp
public object MatchExpressionsInput { get; }
```

- *Type:* object

---

##### `MatchLabelsInput`<sup>Optional</sup> <a name="MatchLabelsInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MatchLabels`<sup>Required</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.internalValue"></a>

```csharp
public ValidatingWebhookConfigurationWebhookObjectSelector InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelector">ValidatingWebhookConfigurationWebhookObjectSelector</a>

---


### ValidatingWebhookConfigurationWebhookOutputReference <a name="ValidatingWebhookConfigurationWebhookOutputReference" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ValidatingWebhookConfigurationWebhookOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.putClientConfig">PutClientConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.putNamespaceSelector">PutNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.putObjectSelector">PutObjectSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetAdmissionReviewVersions">ResetAdmissionReviewVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetFailurePolicy">ResetFailurePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetMatchPolicy">ResetMatchPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetNamespaceSelector">ResetNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetObjectSelector">ResetObjectSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetRule">ResetRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetSideEffects">ResetSideEffects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetTimeoutSeconds">ResetTimeoutSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientConfig` <a name="PutClientConfig" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.putClientConfig"></a>

```csharp
private void PutClientConfig(ValidatingWebhookConfigurationWebhookClientConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.putClientConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig">ValidatingWebhookConfigurationWebhookClientConfig</a>

---

##### `PutNamespaceSelector` <a name="PutNamespaceSelector" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.putNamespaceSelector"></a>

```csharp
private void PutNamespaceSelector(ValidatingWebhookConfigurationWebhookNamespaceSelector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.putNamespaceSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelector">ValidatingWebhookConfigurationWebhookNamespaceSelector</a>

---

##### `PutObjectSelector` <a name="PutObjectSelector" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.putObjectSelector"></a>

```csharp
private void PutObjectSelector(ValidatingWebhookConfigurationWebhookObjectSelector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.putObjectSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelector">ValidatingWebhookConfigurationWebhookObjectSelector</a>

---

##### `PutRule` <a name="PutRule" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.putRule"></a>

```csharp
private void PutRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.putRule.parameter.value"></a>

- *Type:* object

---

##### `ResetAdmissionReviewVersions` <a name="ResetAdmissionReviewVersions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetAdmissionReviewVersions"></a>

```csharp
private void ResetAdmissionReviewVersions()
```

##### `ResetFailurePolicy` <a name="ResetFailurePolicy" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetFailurePolicy"></a>

```csharp
private void ResetFailurePolicy()
```

##### `ResetMatchPolicy` <a name="ResetMatchPolicy" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetMatchPolicy"></a>

```csharp
private void ResetMatchPolicy()
```

##### `ResetNamespaceSelector` <a name="ResetNamespaceSelector" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetNamespaceSelector"></a>

```csharp
private void ResetNamespaceSelector()
```

##### `ResetObjectSelector` <a name="ResetObjectSelector" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetObjectSelector"></a>

```csharp
private void ResetObjectSelector()
```

##### `ResetRule` <a name="ResetRule" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetRule"></a>

```csharp
private void ResetRule()
```

##### `ResetSideEffects` <a name="ResetSideEffects" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetSideEffects"></a>

```csharp
private void ResetSideEffects()
```

##### `ResetTimeoutSeconds` <a name="ResetTimeoutSeconds" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetTimeoutSeconds"></a>

```csharp
private void ResetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.clientConfig">ClientConfig</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference">ValidatingWebhookConfigurationWebhookClientConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.namespaceSelector">NamespaceSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference">ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.objectSelector">ObjectSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference">ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList">ValidatingWebhookConfigurationWebhookRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.admissionReviewVersionsInput">AdmissionReviewVersionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.clientConfigInput">ClientConfigInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig">ValidatingWebhookConfigurationWebhookClientConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.failurePolicyInput">FailurePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.matchPolicyInput">MatchPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.namespaceSelectorInput">NamespaceSelectorInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelector">ValidatingWebhookConfigurationWebhookNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.objectSelectorInput">ObjectSelectorInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelector">ValidatingWebhookConfigurationWebhookObjectSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.ruleInput">RuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.sideEffectsInput">SideEffectsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.timeoutSecondsInput">TimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.admissionReviewVersions">AdmissionReviewVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.failurePolicy">FailurePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.matchPolicy">MatchPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.sideEffects">SideEffects</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientConfig`<sup>Required</sup> <a name="ClientConfig" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.clientConfig"></a>

```csharp
public ValidatingWebhookConfigurationWebhookClientConfigOutputReference ClientConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference">ValidatingWebhookConfigurationWebhookClientConfigOutputReference</a>

---

##### `NamespaceSelector`<sup>Required</sup> <a name="NamespaceSelector" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.namespaceSelector"></a>

```csharp
public ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference NamespaceSelector { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference">ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference</a>

---

##### `ObjectSelector`<sup>Required</sup> <a name="ObjectSelector" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.objectSelector"></a>

```csharp
public ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference ObjectSelector { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference">ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference</a>

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.rule"></a>

```csharp
public ValidatingWebhookConfigurationWebhookRuleList Rule { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList">ValidatingWebhookConfigurationWebhookRuleList</a>

---

##### `AdmissionReviewVersionsInput`<sup>Optional</sup> <a name="AdmissionReviewVersionsInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.admissionReviewVersionsInput"></a>

```csharp
public string[] AdmissionReviewVersionsInput { get; }
```

- *Type:* string[]

---

##### `ClientConfigInput`<sup>Optional</sup> <a name="ClientConfigInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.clientConfigInput"></a>

```csharp
public ValidatingWebhookConfigurationWebhookClientConfig ClientConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig">ValidatingWebhookConfigurationWebhookClientConfig</a>

---

##### `FailurePolicyInput`<sup>Optional</sup> <a name="FailurePolicyInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.failurePolicyInput"></a>

```csharp
public string FailurePolicyInput { get; }
```

- *Type:* string

---

##### `MatchPolicyInput`<sup>Optional</sup> <a name="MatchPolicyInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.matchPolicyInput"></a>

```csharp
public string MatchPolicyInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceSelectorInput`<sup>Optional</sup> <a name="NamespaceSelectorInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.namespaceSelectorInput"></a>

```csharp
public ValidatingWebhookConfigurationWebhookNamespaceSelector NamespaceSelectorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelector">ValidatingWebhookConfigurationWebhookNamespaceSelector</a>

---

##### `ObjectSelectorInput`<sup>Optional</sup> <a name="ObjectSelectorInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.objectSelectorInput"></a>

```csharp
public ValidatingWebhookConfigurationWebhookObjectSelector ObjectSelectorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelector">ValidatingWebhookConfigurationWebhookObjectSelector</a>

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.ruleInput"></a>

```csharp
public object RuleInput { get; }
```

- *Type:* object

---

##### `SideEffectsInput`<sup>Optional</sup> <a name="SideEffectsInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.sideEffectsInput"></a>

```csharp
public string SideEffectsInput { get; }
```

- *Type:* string

---

##### `TimeoutSecondsInput`<sup>Optional</sup> <a name="TimeoutSecondsInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.timeoutSecondsInput"></a>

```csharp
public double TimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `AdmissionReviewVersions`<sup>Required</sup> <a name="AdmissionReviewVersions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.admissionReviewVersions"></a>

```csharp
public string[] AdmissionReviewVersions { get; }
```

- *Type:* string[]

---

##### `FailurePolicy`<sup>Required</sup> <a name="FailurePolicy" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.failurePolicy"></a>

```csharp
public string FailurePolicy { get; }
```

- *Type:* string

---

##### `MatchPolicy`<sup>Required</sup> <a name="MatchPolicy" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.matchPolicy"></a>

```csharp
public string MatchPolicy { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SideEffects`<sup>Required</sup> <a name="SideEffects" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.sideEffects"></a>

```csharp
public string SideEffects { get; }
```

- *Type:* string

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ValidatingWebhookConfigurationWebhookRuleList <a name="ValidatingWebhookConfigurationWebhookRuleList" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ValidatingWebhookConfigurationWebhookRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.get"></a>

```csharp
private ValidatingWebhookConfigurationWebhookRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ValidatingWebhookConfigurationWebhookRuleOutputReference <a name="ValidatingWebhookConfigurationWebhookRuleOutputReference" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ValidatingWebhookConfigurationWebhookRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.resetScope"></a>

```csharp
private void ResetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.apiGroupsInput">ApiGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.apiVersionsInput">ApiVersionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.operationsInput">OperationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.apiGroups">ApiGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.apiVersions">ApiVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.operations">Operations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.resources">Resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiGroupsInput`<sup>Optional</sup> <a name="ApiGroupsInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.apiGroupsInput"></a>

```csharp
public string[] ApiGroupsInput { get; }
```

- *Type:* string[]

---

##### `ApiVersionsInput`<sup>Optional</sup> <a name="ApiVersionsInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.apiVersionsInput"></a>

```csharp
public string[] ApiVersionsInput { get; }
```

- *Type:* string[]

---

##### `OperationsInput`<sup>Optional</sup> <a name="OperationsInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.operationsInput"></a>

```csharp
public string[] OperationsInput { get; }
```

- *Type:* string[]

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.resourcesInput"></a>

```csharp
public string[] ResourcesInput { get; }
```

- *Type:* string[]

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `ApiGroups`<sup>Required</sup> <a name="ApiGroups" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.apiGroups"></a>

```csharp
public string[] ApiGroups { get; }
```

- *Type:* string[]

---

##### `ApiVersions`<sup>Required</sup> <a name="ApiVersions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.apiVersions"></a>

```csharp
public string[] ApiVersions { get; }
```

- *Type:* string[]

---

##### `Operations`<sup>Required</sup> <a name="Operations" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.operations"></a>

```csharp
public string[] Operations { get; }
```

- *Type:* string[]

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.resources"></a>

```csharp
public string[] Resources { get; }
```

- *Type:* string[]

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



